// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: "AIzaSyDToY_nyiroOW-7vlv0hIYd5z7WTn9JY1w",
  authDomain: "seb2021-20b81.firebaseapp.com",
  databaseURL: "https://seb2021-20b81-default-rtdb.firebaseio.com",
  projectId: "seb2021-20b81",
  storageBucket: "seb2021-20b81.appspot.com",
  messagingSenderId: "1077043077047",
  appId: "1:1077043077047:web:c60a92121ae0b751621232",
  measurementId: "G-R09WHX974P"
});

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
