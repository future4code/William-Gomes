import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { createTask } from './controller/task/createTask'
import { getTaskById } from './controller/task/getTaskById'
import { userRouter } from "./routes/userRouter"

app.use('/users/', userRouter)


app.put('/task', createTask)
app.get('/task/:id', getTaskById)

