import { Router } from "express"
import { createPost } from "../controller/post/createPost"
import { getPostById } from "../controller/post/getPostbyId"

export const taskRouter = Router()

taskRouter.put("/", createPost)
taskRouter.get("/:id", getPostById)
