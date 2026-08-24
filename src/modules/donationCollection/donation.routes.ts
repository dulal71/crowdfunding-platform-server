import { Router } from "express";
import { createDonation, getDonationByDonationId, updateDonation } from "./donation.controller";


export const donationRouter=Router()
donationRouter.get('/:donationId',getDonationByDonationId)
donationRouter.post('/',createDonation)
donationRouter.patch('/:id',updateDonation)