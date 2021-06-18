import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { user, userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   userData: userData
):Promise<string> => {
   if (
      !userData.name ||
      !userData.email ||
      !userData.password 
){
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
       }

   const cypherPassword = await hash(userData.password);

   const newUser: user = {
      ...userData,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,

   })

   return token

}