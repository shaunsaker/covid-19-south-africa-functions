import * as firebase from "firebase-admin";

const serviceAccount = require("./service-account.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://covid-19-south-africa.firebaseio.com",
});

export { firebase };
