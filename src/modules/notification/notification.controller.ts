import { Request, Response } from "express";
import { getNotificationsService } from "./notification.service";

export const getNotifications = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.query.userId as string;
       
    const notifications =
      await getNotificationsService(userId);

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get notifications",
    });
  }
};