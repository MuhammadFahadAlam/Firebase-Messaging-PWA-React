import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyCRhtMMBvtcMMoxVmTKp_-9TBWXayzJZHE",
    authDomain: "fir-messaging-4658c.firebaseapp.com",
    projectId: "fir-messaging-4658c",
    storageBucket: "fir-messaging-4658c.appspot.com",
    messagingSenderId: "613035320177",
    appId: "1:613035320177:web:0d834b91f988c642af4cd0",
};

initializeApp(firebaseConfig)

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getMessagingToken = (setTokenFound, setToken) => {
    return getToken(messaging, {vapidKey: 'BG1X7eCJkQ9Lo1imyERyqPbqUCIETsE1o03SgkKxADlUNlpGD289M2d1dwNnkQWQyZfsYNfFyaV53ceNvpEeonU'}).then((currentToken) => {
      console.log("Retrieving Token")
        if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        setToken(currentToken)
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});