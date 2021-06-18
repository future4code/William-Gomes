import { Request, Response } from "express";
import { getPostByIdBusiness } from "../../business/posts/getPostByIdBusiness";


export const getPostById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

      const post = getPostByIdBusiness(id)

      res.status(200).send(post)

   } catch (error) {
      res.status(400).send(error.message)
   }
}