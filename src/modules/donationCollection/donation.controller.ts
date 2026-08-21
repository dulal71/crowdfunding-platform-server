import { Request, Response } from "express";
import { createDonationService } from "./donation.service";

export const createDonation=async(
  req:Request ,
  res:Response 
)=>{
const data=req.body
const document={
    ...data,
createdAt: new Date(),
}
const result = await createDonationService(document)
res.status(201).json({
    success: true,
    message: "donation created successfully",
    data: result,
  });
}


