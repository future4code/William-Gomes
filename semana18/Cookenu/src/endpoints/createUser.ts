import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user} from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name,email, password} = req.body

      if (!name || !email || !password ) {
         throw new Error("Preencha os campos 'name', 'password', 'email' ")
      }

       
      if(password.length < 6){
         throw new Error("Password must be at least 6 characters")
      }


      const [user] = await connection('users_cookenu')
         .where({ email })



      if (user) {
        
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

   
      const cypherText = await hash(password);


      const newUser: user = { id, name, email, password: cypherText }


      await connection('users_cookenu')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({ token })

   } catch (error) {
         res.send({ message: error.message })
      
   }
}