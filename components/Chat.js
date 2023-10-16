import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { useEffect, useState } from 'react';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';

const ChattyScreen = ({ route, navigation, db, isConnected }) => {
  const { name, pickColor, userID } = route.params;
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages) => {
    addDoc(collection(db, 'messages'), newMessages[0]);
  };

  useEffect(() => {
    let unsubMessages;
    if (isConnected === true) {
      if (unsubMessages) unsubMessages();
      unsubMessages = null;

      const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));

      unsubMessages = onSnapshot(q, (docs) => {
        let newMessages = [];
        docs.forEach((doc) => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis())
          });
        });
        cacheMessages(newMessages);
        setMessages(newMessages);
      });
    } else loadCachedLists();

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, [isConnected]);

  //caches and saves messages with async storage
  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem(
        'new_messages',
        JSON.stringify(messagesToCache)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  //goes through cached messages and parses them back to the original state to be displayed if user loses connection
  const loadCachedLists = async () => {
    const cachedMessages = (await AsyncStorage.getItem('new_messages')) || [];
    setMessages(JSON.parse(cachedMessages));
  };

  //disables toolbar if user loses connection
  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  };

  //sets bubble color for chat text boxes
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#218aff'
          },
          left: {
            backgroundColor: '#FFF'
          }
        }}
      />
    );
  };
  return (
    <View style={[styles.container, { backgroundColor: pickColor }]}>
      <GiftedChat
        renderInputToolbar={renderInputToolbar}
        renderBubble={renderBubble}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name
        }}
      />
      {Platform.OS === 'android' ? (
        <KeyboardAvoidingView behavior='height' />
      ) : null}
      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView behavior='padding' />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default ChattyScreen;
