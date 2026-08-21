import { getDB } from "../../config/db";
import { INotification } from "../notification/notification.interface";
import { createNotificationService } from "../notification/notification.service";
import { IDonation } from "./donation.interface";

export const createDonationService=async(data:IDonation)=>{
console.log(data);
  const db = getDB()
const donationCollection = db.collection("donations");
const result = await donationCollection.insertOne(data)
 if(result.insertedId){
  const notification : INotification={
 type: "DONATION_RECEIVED",
    title: "New Donation Received",
    message: `You received a new donation of ${data.amount}.`,
    userId:data.creatorId,
     donationId: result.insertedId.toString(),
    campaignId:data.campaignId,
    isRead: false,
    createdAt: new Date(),
  }
 await createNotificationService(notification)
 }

;


return result

}