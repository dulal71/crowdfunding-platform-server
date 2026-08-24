import { ObjectId } from "mongodb";
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


export const getDonationServiceByDonationId = async (donationId:string) => {
  const db = getDB();

  const donationCollection = db.collection("donations");

const query = {
  _id:new ObjectId(donationId)
};
  const donation = await donationCollection.findOne(query)
    

  return donation;
};



export const updateDonationService=async( id:string,data:IDonation)=>{

  const db = getDB()
  console.log(data);
const donationCollection = db.collection("donations");
const query={
  _id:new ObjectId(id)
}
const updateData = {
  $set: {
    status: data.status,
  },
};
const result = await donationCollection.updateOne(query,updateData)
 if(result.modifiedCount > 0){
  const notification : INotification={
 type: "FUND_APPROVED",
    title: "Donation Approved",
    message: `Your donation of ${data.amount} has been received successfully.`,
    userId:data.supporterId,
    donationId:id,
    campaignId:data.campaignId,
    isRead: false,
    createdAt: new Date(),
  }
 await createNotificationService(notification)
 }

;

return result

}
