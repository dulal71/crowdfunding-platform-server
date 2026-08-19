import express from "express";
import routes from "./routes";
import notificationRouter from "./modules/notification/notification.routes";
import { userRouter } from "./modules/users/user.routes";

const app = express();

app.use(express.json());

app.use("/api/v1", routes);
app.use("/api/notifications", notificationRouter);
app.use('/api/users',userRouter)

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Crowdfunding Backend is running 🚀",
  });
});

export default app;