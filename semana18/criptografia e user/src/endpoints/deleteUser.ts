import { Request, Response, raw } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types";

export default async function deleteUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const token = req.headers.authorization as string;
      const verifiedToken = getTokenData(token);

      if(verifiedToken.role !== USER_ROLES.ADMIN){
         res.statusCode = 403
         res.statusMessage = "Somente administradores podem deletar um perfil"
         throw new Error()
      }

      const id = req.params.id

      if (!id) {
         res.statusCode = 422
         res.statusMessage = "Informe o seu(a) id"
         throw new Error()
      }

      await connection('to_do_list_users')
         .delete()
         .where( "id" ,id )

      res.send("Usuário Deletado")
   

   } catch (error) {

      if(error.message.includes("expired")){
         res.statusCode = 401;
         res.send({message:"Unauthorized"})
      }

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}