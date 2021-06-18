import { connection } from "../../connection";

export const selectPostById = async (
   id: string
): Promise<any> => {
   const result: any = await connection.raw(`
        SELECT post.*, name FROM labook_posts AS post
        JOIN labook_users AS users
        ON authorId = users.id
        WHERE post.id = '${id}';
    `)

   return result[0][0]
}