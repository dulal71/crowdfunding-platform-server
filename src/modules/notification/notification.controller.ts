import { Request, Response } from "express";
import { deleteNotificationService, getNotificationsService, updateNotificationService,  } from "./notification.service";

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


export const updateNotification=async(
   req: Request<{id:string}>,
  res: Response
)=>{
  try {
    const id = req.params.id;
    const data = req.body;
       
    const notifications =
      await updateNotificationService(id,data);

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
}


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