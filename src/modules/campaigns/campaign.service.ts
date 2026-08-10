
import { Filter, ObjectId } from "mongodb";
import { getDB } from "../../config/db";
import { ICampaign } from "./campaign.interface";
import { createNotificationService } from "../notification/notification.service";
import { INotification } from "../notification/notification.interface";

export const getAllCampaignsService = async (query: Filter<ICampaign>) => {
  const db = getDB()
  const campaignCollection = db.collection<ICampaign>('campaigns')
  const total = await campaignCollection.countDocuments()
  const active = await campaignCollection.countDocuments({
  status: "active",
});

const pending = await campaignCollection.countDocuments({
  status: "pending",
});
const completed = await campaignCollection.countDocuments({
  status: "completed",
});

  const campaigns = await campaignCollection.find(query).toArray()
   return {total,campaigns,pending,active,completed};
 
};

export const getCampaignByIdService = async (id: string) => {
  const db = getDB();

  const campaignCollection =
    db.collection<ICampaign>("campaigns");

  const query = {
    _id: new ObjectId(id)
  };

  const campaign = await campaignCollection.findOne(query);

  return campaign;
};













export const createCampaignService=async(data:ICampaign)=>{
console.log(data);
  const db = getDB()
const campaignCollection = db.collection("campaigns");
const result = await campaignCollection.insertOne(data)
 if(result.insertedId){
  const notification : INotification={
 type: "CAMPAIGN_CREATED",
    title: "New Campaign Created",
    message: `${data.campaign_title} has been submitted for approval.`,
    userId: "6a78296d8809502d6d061401",
    campaignId: result.insertedId.toString(),
    isRead: false,
    createdAt: new Date(),
  }
 await createNotificationService(notification)
 }

;


return result

}