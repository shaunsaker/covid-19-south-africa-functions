export interface ConfirmedCase {
  dateAdded: string;
  confirmedCases: number;
  dateCreated: string;
  title: string;
  href: string;
}

export type Topics = "confirmedCases";

export interface NotificationMessage {
  title: string;
  body: string;
}
