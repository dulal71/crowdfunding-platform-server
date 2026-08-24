import { Request, Response } from "express";
import { createDonationService, getDonationServiceByDonationId, updateDonationService } from "./donation.service";

export const createDonation=async(
  req:Request ,
  res:Response 
)=>{
const data=req.body
console.log(data);
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


export const getDonationByDonationId = async (
    req: Request<{ donationId: string }>,
  res: Response
) => {
  try {
   const {donationId} = req.params;
       
    const donation = await getDonationServiceByDonationId(donationId);

    res.status(200).json({
      success: true,
      data: donation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get notifications",
    });
  }
};


export const updateDonation=async(
  req:Request<{id:string}> ,
  res:Response 
)=>{
  const {id}=req.params
const data=req.body
console.log(data);

const result = await updateDonationService(id,data)
res.status(201).json({
    success: true,
    message: "donation created successfully",
    data: result,
  });
}

