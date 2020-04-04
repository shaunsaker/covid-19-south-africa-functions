import * as functions from "firebase-functions";

import { sendNotification } from "./sendNotification";
import { ConfirmedCase } from "../types";

const notifyConfirmedCaseCreated = functions.firestore
  .document("confirmedCases/{confirmedCaseId}")
  .onCreate(async (snapshot, context) => {
    const confirmedCase = snapshot.data() as ConfirmedCase;
    console.log(
      `New confirmed cases document added with id: ${context.params.confirmedCaseId}`
    );

    const notification = {
      title: "Latest confirmed cases of COVID-19",
      body: `South Africa has just confirmed ${confirmedCase.confirmedCases} COVID-19 cases. Open the app for more info.`,
    };
    console.log(
      `Created notification with title: ${notification.title}, body: ${notification.body} `
    );

    await sendNotification(notification, "confirmedCases");
  });

export { notifyConfirmedCaseCreated };
