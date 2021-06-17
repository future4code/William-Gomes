import { connection } from "../../connection";
import { post } from "../../model/post";

export const InsertPost = async (
    post:post
) => {
    await connection("labook_posts")
.insert({
   id: post.id,
   photo:post.photo,
   description:post.description,
   type:post.type,
   author_id: tokenData.id
})
}
