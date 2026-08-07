import { Router } from "express";
import { createCampaigns, getAllCampaigns } from "./campaign.controller";

const router = Router();

router.get("/", getAllCampaigns);
router.post('/',createCampaigns)

export default router;