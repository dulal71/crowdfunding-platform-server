import express from "express"
import { deleteNotification, getNotificationByCampaignId,  getNotifications } from "./notification.controller"

export const notificationRouter = express.Router()
notificationRouter.get('/',getNotifications)
notificationRouter.get('/:campaignId',getNotificationByCampaignId)
notificationRouter.delete('/:id',deleteNotification)

export default notificationRouter