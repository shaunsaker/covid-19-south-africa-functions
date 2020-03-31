import { NotificationMessage, Topics } from "../../types";
import { admin } from "../../admin";

const sendNotification = async (
  notification: NotificationMessage,
  topic?: Topics | null,
  token?: string | undefined
) => {
  let payload;

  if (topic) {
    payload = {
      notification,
      topic
    };
  } else if (token) {
    payload = {
      notification,
      token
    };
  }

  if (payload) {
    console.log("Sending notification...");

    try {
      const response = await admin.messaging().send(payload);

      console.log(`Successfully sent notification: ${response}`);
    } catch (error) {
      console.log(error.message);
    }
  }
};

export { sendNotification };
