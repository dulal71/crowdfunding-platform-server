export type IDonation ={
    supporterName:string,
      supporterEmail:string,
    campaignId:string,
    supporterId:string,
    creatorId:string,
    amount:number,
     status: "pending" | "approved" | "rejected",
    createdAt:string,
    acceptedAt:string
}