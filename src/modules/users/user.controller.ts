import { Request, Response } from "express";
import { getUserService } from "./user.service";

export const getUser = async (
  req: Request,
  res: Response
) => {
  try {
    
       
    const data =await getUserService();

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get user",
    });
  }
};