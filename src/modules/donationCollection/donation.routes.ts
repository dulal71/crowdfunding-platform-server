import { Router } from "express";
import { createDonation } from "./donation.controller";


export const donationRouter=Router()

donationRouter.post('/',createDonation)