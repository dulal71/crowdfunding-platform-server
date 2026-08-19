import { getDB } from "../../config/db";
import { IUser } from "./user.interface";


export const getUserService = async () => {
  const db = getDB();

  const UserCollection =
    db.collection<IUser>("user");
   const total = await UserCollection.countDocuments()
  const users = await UserCollection
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return {users,total};
};