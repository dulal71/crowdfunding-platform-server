import express from "express"
import { getNotifications } from "./notification.controller"

const notificationRouter = express.Router()
notificationRouter.get('/',getNotifications)

export default notificationRouter