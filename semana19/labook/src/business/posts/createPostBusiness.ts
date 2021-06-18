import { postData } from "../../model/post";
import { generateId } from "../../services/idGenerator";
import { PostDatabase } from "../../data/post/postDatabase";

export const createPostBusiness = async (
   postData: postData
) => {

   if (
      !postData.photo ||
      !postData.description ||
      !postData.type ||
      !postData.authorId
   ) {
      throw new Error('"type", "description", "photo" e "authorId" são obrigatórios')
   }

   const id: string = generateId()

   const td = new PostDatabase("labook_posts");
   
   await td.createPost({
      id,
      ...postData
   })
}