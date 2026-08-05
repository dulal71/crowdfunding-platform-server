import { Router } from "express";
import campaignRoutes from "../modules/campaigns/campaign.routes";

const router = Router();

router.use("/campaigns", campaignRoutes);

export default router;