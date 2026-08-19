import { ObjectId } from "mongodb";
import { getDB } from "../../config/db";
import { INotification } from "./notification.interface";

export const createNotificationService = async (
  notification: INotification
) => {
  console.log("NOTIFICATION DATA:", notification);

  const db = getDB();

  const notificationCollection =
    db.collection<INotification>("notifications");

  const result = await notificationCollection.insertOne(notification);

  return result;
};

export const getNotificationsService = async (userId:string) => {
  const db = getDB();

  const notificationCollection =
    db.collection<INotification>("notifications");

  const notifications = await notificationCollection
    .find({userId})
    .sort({ createdAt: -1 })
    .toArray();

  return notifications;
};


export const deleteNotificationService=async(id:string)=>{
   const db = getDB();
   console.log(id);
  const notificationCollection =
    db.collection<INotification>("notifications");
const query={
  _id:new ObjectId(id)
}
  const result = await notificationCollection.deleteOne(query)
    

  return result ;
}