import { Request, Response } from "express";
import { createCampaignService, getAllCampaignsService } from "./campaign.service";


export const getAllCampaigns = async (
  req: Request,
  res: Response
) => {
  const campaigns = await getAllCampaignsService();

  res.status(200).json({
    success: true,
    data: campaigns,
  });
};



export const createCampaigns = async (
  req: Request,
  res: Response
) => {
  const result = await createCampaignService(req.body)

  res.status(201).json({
    success: true,
    message: "Campaign created successfully",
    data: result,
  });
};