import { ObjectId } from "mongodb";

export interface IUser {
   _id:ObjectId ;
   name:string;
   email:string;
   image:string;
   role:string;
   credits:Number
}