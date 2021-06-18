import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"
import { recipe } from "./types/recipe"
import { user } from "./types/user"

dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/users/all", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await connection.raw(`
         SELECT *
         FROM aula48_exercicio
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(user)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/users/search", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {

     const nome = req.query.nome as string 
     
     
      const result = await connection.raw(`
         SELECT *
         FROM aula48_exercicio
         WHERE name LIKE "%${nome}%"
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(user)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})


app.get("/users/search/:type", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {

     const type = req.params.type
     
     
      const result = await connection.raw(`
         SELECT *
         FROM aula48_exercicio
         WHERE type LIKE "%${type}%"
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(user)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})




app.get("/users/ord", async (req: Request, res: Response) => {
   try {
      const orderBy = req.query.orderBy as string || "email"
      const orderType = req.query.orderType as string || "ASC"
      const page = Number(req.query.page) || 1

      if ( !orderBy || !orderType) {
         res.statusCode = 400
         throw new Error("Missing one or more queries: 'title', 'orderBy', 'orderType'.")
      }

      // const recipes: recipe[] = await connection('recipes_aula48')
      //    .select('title', 'name AS author', 'description')
      //    .join('users_aula48', 'user_id', '=', 'users_aula48.id')
      //    .where('title', 'like', `%${title}%`)
      //    .orderBy(orderBy, orderType)

      const result = await connection.raw(`
         SELECT *
         FROM aula48_exercicio
         
         ORDER BY  ${orderBy} ${orderType.toUpperCase()}   
         LIMIT 5
         OFFSET ${5 * (page - 1)};
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send({
         user,
         page
      })
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})






/*


app.get("/users/ord", async (req: Request, res: Response) => {
   try {
      const orderBy = req.query.orderBy as string || "name"
      const orderType = req.query.orderType as string || "DESC"
      const page = Number(req.query.page) || 1

      if ( !orderBy || !orderType) {
         res.statusCode = 400
         throw new Error("Missing one or more queries: 'title', 'orderBy', 'orderType'.")
      }

      // const recipes: recipe[] = await connection('recipes_aula48')
      //    .select('title', 'name AS author', 'description')
      //    .join('users_aula48', 'user_id', '=', 'users_aula48.id')
      //    .where('title', 'like', `%${title}%`)
      //    .orderBy(orderBy, orderType)

      const result = await connection.raw(`
         SELECT *
         FROM aula48_exercicio
         
         ORDER BY  ${orderBy} ${orderType.toUpperCase()}   
         LIMIT 5
         OFFSET ${5 * (page - 1)};
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send({
         user,
         page
      })
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})


*/











const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
