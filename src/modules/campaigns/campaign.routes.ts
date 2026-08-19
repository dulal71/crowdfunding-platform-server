import { Router } from "express";
import { createCampaigns, getAllCampaigns, getCampaignById, updateCampaign } from "./campaign.controller";


const router = Router();

router.get("/", getAllCampaigns);
router.get('/:id',getCampaignById)
router.post('/',createCampaigns)
router.patch('/:id',updateCampaign)

export default router;