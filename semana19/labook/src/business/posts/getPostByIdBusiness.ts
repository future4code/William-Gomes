import { selectPostById } from "../../data/post/selectPostbyId"

export const getPostByIdBusiness = async (
   id: string
) => {
   const result = await selectPostById(id)

   if (!result) {
      throw new Error("Post não encontrada")
   }

   const postWithUserInfo = {
      id: result.id,
      type: result.type,
      description: result.description,
      photo: result.photo,
      name: result.name,
      authorId: result.author_id,
   }

   return postWithUserInfo
}