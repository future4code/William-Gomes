import { toUserModel, user } from "../../model/user";
import { connection } from "../../connection"

export const selectUserByEmail = async (
    email:string
):Promise <user> => {
    try {
    const result = await connection("labook_users")
   .select("*")
   .where({ email })

   return toUserModel(result[0])

}catch(error){
    throw new Error(error.sqlMessege || error.messege);
    
}

}