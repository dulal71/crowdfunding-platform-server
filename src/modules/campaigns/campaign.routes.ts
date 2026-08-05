import { Router } from "express";
import { getAllCampaigns } from "./campaign.controller";

const router = Router();

router.get("/", getAllCampaigns);

export default router;