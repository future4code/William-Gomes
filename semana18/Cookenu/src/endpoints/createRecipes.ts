import { Request, Response } from "express";
import connection from "../connection";
import { generateToken, getTokenData } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { authenticationData, recipesInfo, user} from "../types";
import { hash } from "../services/hashManager";

export default async function createRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const {titulo,date_recipes,descricao} = req.body

      if (!titulo || !date_recipes || !descricao ) {
         throw new Error("Preencha os campos 'titulo', 'date', 'description' ")
      }

      const tokenUser: string = req.headers.authorization!

      const tokenData: authenticationData | null = getTokenData(tokenUser)

      if(!tokenData){
         res.statusCode = 401
         throw new Error("Unatuthorized");
      }

      


      const [user] = await connection('recipes_cookenu')
         .where({ titulo })



      if (user) {
        
         throw new Error('recipe already registered')
      }

      const id: string = generateId();

      const newRecipes: recipesInfo|authenticationData = { id, titulo,date_recipes,descricao}


      await connection('recipes_cookenu')
         .insert(newRecipes)

      const token: string = generateToken({ id })

      res.status(201).send({ token })

   } catch (error) {
         res.send({ message: error.message })
      
   }
}