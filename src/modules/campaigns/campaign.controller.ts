import { Request, Response } from "express";
import { createCampaignService, getAllCampaignsService, getCampaignByIdService, updateCampaignData, updateCampaigndata } from "./campaign.service";
import { Filter, ObjectId } from "mongodb";
import { ICampaign } from "./campaign.interface";


export const getAllCampaigns = async (
  req: Request,
  res: Response
) => {
  const query:Filter<ICampaign> = {};
const status = req.query.status as string || ''
const category=req.query.category as string || ''
const excludeId=req.query.excludeId as string
if (status) {
  query.status = status
}
if (category) {
  query.category = category
}
if (excludeId) {
    query._id = {
      $ne: new ObjectId(excludeId),
    };
  }
  const data = await getAllCampaignsService(query);

  res.status(200).json({
    success: true,
    data
  });
};

export const getCampaignById=async(
  req: Request,
  res: Response
)=>{
const {id} =req.params
const data = await  getCampaignByIdService(id as string);

  res.status(200).json({
    success: true,
    data
  });
}



export const createCampaigns = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
 const document = {
  ...data,
  createdAt: new Date(),
};
  const result = await createCampaignService(document)

  res.status(201).json({
    success: true,
    message: "Campaign created successfully",
    data: result,
  });
};


export const updateCampaign=async(
  req:Request,
  res:Response
)=>{
  const {id}=req.params
  const data =req.body
 
const result = await updateCampaignData(id,data)
 res.status(201).json({
    success: true,
    message: "Campaign update successfully",
    data: result,
  });
}