import { Request, Response } from "express";
import { createPostBusiness } from "../../business/posts/createPostBusiness";

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {

      const { photo, description, type, authorId, createdAt } = req.body

      await createPostBusiness({
         photo, description, type, authorId, createdAt
      })

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}