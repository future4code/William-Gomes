import { app } from "./controller/app"
import { taskRouter } from "./routes/postRouter"
import { userRouter } from "./routes/userRouter"

app.use("/users", userRouter)
app.use("/tasks", taskRouter)