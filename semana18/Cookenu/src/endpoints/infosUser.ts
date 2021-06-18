import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userPersonalInfo} from "../types";

export default async function infosUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

   

      const token: string = req.headers.authorization!

      const tokenData: authenticationData | null = getTokenData(token)

      if(!tokenData){
         res.statusCode = 401
         throw new Error("Unatuthorized");
      }

     

  const [user] = await connection('users_cookenu')
      .where({ 
             id: tokenData.id,         
            })
            

      res.send({
         email:user.email,
         id:user.id
       
        
        }

        );

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({message: error.message})
      }

      res.send({message: error.message})
   }
}