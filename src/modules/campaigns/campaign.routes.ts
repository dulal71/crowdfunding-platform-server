import { Router } from "express";
import { createCampaigns, getAllCampaigns, getCampaignById } from "./campaign.controller";

const router = Router();

router.get("/", getAllCampaigns);
router.get('/:id',getCampaignById)
router.post('/',createCampaigns)

export default router;