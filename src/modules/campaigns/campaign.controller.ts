import { Request, Response } from "express";

export const getAllCampaigns = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "All campaigns fetched successfully",
  });
};