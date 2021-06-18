import { post } from "../../model/post";
import { connection } from "../../connection";

export class PostDatabase {
    //atributo da classe
    private tableName: string;

    constructor(/*parâmetro do construtor*/tableName: string){
        //atributo   =   parâmetro 
        this.tableName = tableName;
    }

    createPost= async (
        post: post
     ) => {
        await connection(this.tableName)
           .insert({
              id: post.id,
              type: post.type,
              description: post.description,
              photo: post.photo,
              author_id: post.authorId
           })
     }

     getPostById = async (
        id: string
     ): Promise<any> => {
        const result: any = await connection.raw(`
             SELECT *, nickname FROM ${this.tableName} AS POST
             JOIN labook_posts AS users
             ON author_id = users.id
             WHERE posts.id = '${id}';
         `)
     
        return result[0][0]
     }

}

