// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCRhtMMBvtcMMoxVmTKp_-9TBWXayzJZHE",
    authDomain: "fir-messaging-4658c.firebaseapp.com",
    projectId: "fir-messaging-4658c",
    storageBucket: "fir-messaging-4658c.appspot.com",
    messagingSenderId: "613035320177",
    appId: "1:613035320177:web:0d834b91f988c642af4cd0",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});