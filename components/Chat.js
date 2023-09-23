import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { useEffect, useState } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const ChattyScreen = ({ route, navigation }) => {
  const { name, pickColor } = route.params;
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any'
        }
      },
      {
        _id: 2,
        text: `${name} has just entered the chat`,
        createdAt: new Date(),
        system: true
      }
    ]);
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

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
        renderBubble={renderBubble}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1
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
