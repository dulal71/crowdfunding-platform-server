import { getDB } from "../../config/db";
import { ICampaign } from "./campaign.interface";

export const getAllCampaignsService = async () => {
  const db = getDB()
  const campaignCollection = db.collection('campaigns')
  const campaigns = await campaignCollection.find().toArray()
   return campaigns;
 
};


export const createCampaignService=async(data:ICampaign)=>{
 const db = getDB()
const campaignCollection = db.collection("campaigns");
const result = await campaignCollection.insertOne(data)
return result

}