import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';

const ChattyScreen = ({ route, navigation }) => {
  const { name, pickColor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: pickColor }]}>
      <Text style={styles.text}>Hello it's chat time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});

export default ChattyScreen;
