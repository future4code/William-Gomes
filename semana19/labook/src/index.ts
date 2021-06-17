/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"

import Knex from "knex"
import { generateToken, getTokenData } from "./services/authenticator"
import { generateId } from "./services/idGenerator"
import { compare, hash } from "bcryptjs"
import { authenticationData } from "./model/user"

/**************************** CONFIG ******************************/



const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** TYPES ******************************/




/**************************** SERVICES ******************************/





/**************************** ENDPOINTS ******************************/

app.post('/users/signup', async (req: Request, res: Response) => {
   try {
      let message = "Success!"
      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 406
         message = '"name", "email" and "password" must be provided'
         throw new Error(message)
      }

      const id: string = generateId()

      const cypherPassword = await hash(password);

      await connection('labook_users')
         .insert({
            id,
            name,
            email,
            password: cypherPassword
         })

      const token: string = generateToken({ id })

      res.status(201).send({ message, token })

   } catch (error) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
})

app.post('/users/login', async (req: Request, res: Response) => {
   try {


      res.status(200).send({ message, token })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

app.post('/posts/create', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { photo, description, type } = req.body

      const token: string = req.headers.authorization as string

      const tokenData: authenticationData = getTokenData(token)

      const id: string = generateId()

   

      res.status(201).send({ message })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

app.get('/posts/:id', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { id } = req.params

      const queryResult: any = await connection("labook_posts")
         .select("*")
         .where({ id })

      if (!queryResult[0]) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }

      const post: post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }

      res.status(200).send({ message, post })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})