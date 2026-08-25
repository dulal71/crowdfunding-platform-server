import express from "express"
import { deleteNotification,  getNotifications } from "./notification.controller"

export const notificationRouter = express.Router()
notificationRouter.get('/',getNotifications)

notificationRouter.delete('/:id',deleteNotification)

export default notificationRouter