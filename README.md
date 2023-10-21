# Stay-Chatty

<img																		     src="/assets/Homepage_screenshot.png"
  alt="Alt text"
  title="Homepage display"
  style="display: inline-block; width: 250px">
<img																		     src="/assets/Chat_Screenshot.png"
  alt="Alt text"
  title="Chat display"
  style="display: inline-block; width: 250px">

## How It's Made:

**Tech used:** React Native, Expo, Gifted Chat, Firebase

Stay Chatty is a mobile application that allows users to chat back in forth and take and share pictures and their locations. Users are also able to pick their own backgrounds for the chat screen and set their usernames, which are anonymous using firebases anonymous authentication.

## Main Features

-Users are able to take pictures and share pictures from their library of their mobile device.
-Users are able to share their location with the rest of the users in the chat room.
-data sent from users such as messages and images are stored in the database and cached so users are able to still view images or messages offline.

## Getting started

### 1. Create a new folder

Clone the git repository within the project directory folder you just created.

```shell
 git clone https://github.com/OsheaSoftwareEng/Stay-Chatty.git
```

Install Expo Globally:

```shell
npm install - expo-cli
```

Start Expo:

```shell
expo start or npm start
```

## Dependency Versions

#### Install these dependencies in project folder

```shell
"dependencies": {
"@react-native-async-storage/async-storage": "1.18.2",
"@react-native-community/netinfo": "9.3.10",
"@react-navigation/native": "^6.1.7",
"@react-navigation/native-stack": "^6.9.13",
"expo": "~49.0.10",
"expo-image-picker": "~14.3.2",
"expo-location": "~16.1.0",
"expo-status-bar": "~1.6.0",
"firebase": "^9.13.0",
"react": "18.2.0",
"react-native": "0.72.4",
"react-native-gifted-chat": "^2.4.0",
"react-native-maps": "1.7.1"
}
```

## Database setup

1. Create and sign-up for a database on https://firebase.google.com/

2. Install Firebase in your project directory:

```shell
npm install firebase
```

3. Import firebase config from project settings(below is example code yours will be different make sure to overwrite the existing config in this project).

```shell
const firebaseConfig = {
apiKey: "AIzaSyAWnfpvCHIwaKD0wYaUCbH9pqbAu4NhyAY",
authDomain: "chatapp-f783f.firebaseapp.com",
projectId: "chatapp-f783f",
storageBucket: "chatapp-f783f.appspot.com",
messagingSenderId: "751916694021",
appId: "1:751916694021:web:42126664c67d40b06cba6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

```

4. On the Firebase website within firebase database rules adjust "allow read, write: if false;" to "allow read, write: if true;", then publish.

#### Example of correct rules in storage

```shell

rules_version = '2';

service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*\*} {
allow read, write: if true;
}
```

## Optimizations

Planning on adding additional chat functionality such as allowing users to add audio recordings to the chat room along with more user friendly messages to let users know when someone enters the chat room.
