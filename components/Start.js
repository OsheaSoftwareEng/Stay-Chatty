import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';
import backgroundImage from '../assets/Background-Image.png';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartApp = ({ navigation }) => {
  //state to store users name that is typed in and then is displayed as a heading on chat screen.
  const [name, setName] = useState('');

  //color picker for background color state
  const [pickColor, setPickColor] = useState('');

  //function to save selected color to setPickColor state
  const colorSelect = (color) => setPickColor(color);

  // function to check if selected color matches the color saved in the pickColor state and returns a style highlighting selected choice.
  const clickedColor = (color) => {
    if (pickColor === color) {
      return styles.selectedColor;
    } else {
      return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: pickColor }]}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Text style={styles.appTitle}>Stay Chatty</Text>
        <View style={styles.homeContainer}>
          <View style={styles.inputContainer}>
            <Icon name='user' size={20} color='#757080' />
            <TextInput
              style={styles.textInput}
              value={name}
              placeholder='Type your name'
              onChangeText={setName}
            />
          </View>

          <Text style={styles.backgroundText}>
            Choose Your Background Color:
          </Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[
                styles.colorPicker,
                { backgroundColor: '#090C08' },
                clickedColor('#090C08')
              ]}
              onPress={() => colorSelect('#090C08')}
            />
            <TouchableOpacity
              style={[
                styles.colorPicker,
                { backgroundColor: '#474056' },
                clickedColor('#474056')
              ]}
              onPress={() => colorSelect('#474056')}
            />
            <TouchableOpacity
              style={[
                styles.colorPicker,
                { backgroundColor: '#8A95A5' },
                clickedColor('#8A95A5')
              ]}
              onPress={() => colorSelect('#8A95A5')}
            />
            <TouchableOpacity
              style={[
                styles.colorPicker,
                { backgroundColor: '#B9C6AE' },
                clickedColor('#B9C6AE')
              ]}
              onPress={() => colorSelect('#B9C6AE')}
            />
          </View>
          <TouchableOpacity
            style={[styles.chatBtn, { backgroundColor: '#757083' }]}
            onPress={() => {
              navigation.navigate('ChatScreen', { name, pickColor });
            }}
            title='Go to Chatty Screen'
          >
            <Text style={styles.startChattingText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 45,
    color: '#FFFFFF',
    marginTop: 100,
    fontWeight: '600'
  },
  inputContainer: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    margin: 30,
    padding: 10,
    borderRadius: 5
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    resizeMode: 'cover',
    alignItems: 'center'
  },
  homeContainer: {
    width: 350,
    height: 320,
    backgroundColor: '#FFFFFF',
    marginBottom: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10
  },
  textInput: {
    fontSize: 16,
    fontWeight: '300',
    width: 250,
    borderWidth: 0.35,
    borderColor: 'lightgrey',
    height: 40,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    left: 20,
    top: -40
  },
  backgroundText: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center'
  },
  colorContainer: {
    flexDirection: 'row',
    padding: 10
  },
  colorPicker: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10
  },
  startChattingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: '#757083'
  },
  chatBtn: {
    margin: 8,
    paddingHorizontal: 100,
    paddingVertical: 20
  },
  selectedColor: {
    opacity: 1,
    borderColor: 'green',
    borderWidth: 2.5,
    transform: [{ scale: 1.3 }]
  }
});

export default StartApp;
