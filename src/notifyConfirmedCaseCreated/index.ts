import * as functions from "firebase-functions";

import { sendNotification } from "./sendNotification";
import { ConfirmedCase } from "../types";
import { firebase } from "../firebase";

const getPreviouslyConfirmedCases = async () => {
  const previousConfirmedCases = (
    (
      await firebase
        .firestore()
        .collection("confirmedCases")
        .orderBy("confirmedCases", "desc")
        .limit(2) // need to get the previous two to select the previous
        .get()
    ).docs[1].data() as ConfirmedCase
  ).confirmedCases;

  return previousConfirmedCases;
};

const notifyConfirmedCaseCreated = functions.firestore
  .document("confirmedCases/{confirmedCaseId}")
  .onCreate(async (snapshot, context) => {
    console.log(
      `New confirmed cases document added with id: ${context.params.confirmedCaseId}`
    );

    const previousConfirmedCases = await getPreviouslyConfirmedCases();

    const newConfirmedCases = (snapshot.data() as ConfirmedCase).confirmedCases;

    const dailyConfirmedCases = newConfirmedCases - previousConfirmedCases;

    const notification = {
      title: "Latest daily cases of COVID-19",
      body: `South Africa has confirmed ${dailyConfirmedCases} daily COVID-19 cases. Open the app for more info.`,
    };
    console.log(
      `Created notification with title: ${notification.title}, body: ${notification.body} `
    );

    await sendNotification(notification, "confirmedCases");
  });

getPreviouslyConfirmedCases();

export { notifyConfirmedCaseCreated };
