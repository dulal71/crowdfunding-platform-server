import { Request, Response } from "express";
import { deleteNotificationService, getNotificationsService, getNotificationsServiceByCampaignId, getNotificationsServiceById } from "./notification.service";

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
export const getNotificationByCampaignId = async (
    req: Request<{ campaignId: string }>,
  res: Response
) => {
  try {
   const {campaignId} = req.params;
       
    const notification = await getNotificationsServiceByCampaignId(campaignId);

    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get notifications",
    });
  }
};


export const deleteNotification=async(
 req: Request,
  res: Response 
)=>{
try {
    const {id} = req.params as {id:string}
      console.log(id); 
   const result = await deleteNotificationService(id)
     

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed delete notifications",
    });
  }
}