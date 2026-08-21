import { ObjectId } from "mongodb";

export type NotificationType =
   | "DONATION_RECEIVED"
  | "CAMPAIGN_CREATED"
  | "CAMPAIGN_APPROVED"
  | "CAMPAIGN_REJECTED"
  | "FUND_RECEIVED"
  | "FUND_APPROVED"
  | "WITHDRAW_REQUESTED"
  | "WITHDRAW_APPROVED"
  | "WITHDRAW_REJECTED";

export interface INotification {
  _id?:ObjectId;
  type: NotificationType;
  title: string;
  message: string;

  userId: string;

  campaignId?: string;
    
  donationId?: string;
  withdrawalId?: string;

  isRead: boolean;
  createdAt: Date;
}