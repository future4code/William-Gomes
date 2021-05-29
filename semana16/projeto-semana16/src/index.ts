import {connection} from './connection'
import express, { Request, Response } from "express";
import cors from "cors";
import app from './app'
import { count } from 'console';



export const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Usuario WHERE id = '${id}'
    `)

     return result[0][0]
  }

  const createUser = async (apelido:string, name:string, email:string)
  : Promise<any> => {
  const [result] = await connection("Usuario")
       .insert({
         apelido: apelido,
         nome:name,
         email:email
       })
       return result
   };

   app.put("/user", async (req: Request, res: Response) => {
     try {
      
    if (!req.body.nome){
        throw new Error("error, name required")
    }else if(!req.body.email){
        throw new Error("error, emailrequired")
    }
       
      console.log(req.body.nome)
       console.log(await createUser(
         req.body.apelido,
         req.body.nome,
        req.body.email
       )) 
       res.status(200).send("User Created!");
     } catch (err) {
       res.status(400).send({
         message: err.message,
       });
     }
   });


 app.get("/user/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      console.log(await getUserById(id))

      res.end()

    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })



 const updateUser = async (id: string , name: string, apelido: string, email:string )
 : Promise<any> => {
    if(name === ''){
        throw new Error("nome required")
       }
       if(apelido === ''){
        throw new Error("apelido required")
       }
       if(email === ''){
        throw new Error("email required")
       }


 const result =  await connection("Usuario")
      .update({
        email: email,
        nome: name,
        apelido:apelido
      })
      .where("id", id);

      return result
  };

  app.post("/user/edit/:id", async (req: Request, res: Response) => {
    try {

      const id:string = req.params.id
      const nome:string= req.body.nome  
      const apelido:string= req.body.apelido
      const email:string= req.body.email


       if(!id){
        throw new Error("id required")
       }
       
     

     console.log(await updateUser(id,nome,apelido,email))

      res.end()

    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })





 const createTarefa = async (titulo:string, descricao:string, data_limite:string, criador:string)
  : Promise<any> => {
  const [result] = await connection("Tarefas")
       .insert({
         titulo: titulo,
         descricao:descricao,
         data_limite:data_limite,
         criador:criador
       })
       return result
   };

   app.put("/task", async (req: Request, res: Response) => {
     try {
      
    if (!req.body.titulo){
        throw new Error("error, name required")
    }else if(!req.body.descricao){
        throw new Error("error, description required")
    }else if(!req.body.data_limite){
        throw new Error("error, date required")
    }else if(!req.body.criador){
        throw new Error("error, id Created")
    }
       
       console.log(await createTarefa(
         req.body.titulo,
         req.body.descricao,
        req.body.data_limite,
        req.body.id_criador
       )) 
       res.status(200).send("Task Created!");
     } catch (err) {
       res.status(400).send({
         message: err.message,
       });
     }

    
   }
   )


 const getTaskId = async (id: string): Promise<any> => {
    const [result] = await connection.raw(`
      SELECT * FROM Tarefas WHERE id_tarefa = "${id}"
    `)
     return result
//a
  }

 app.get("/task/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id

     console.log(await getTaskId(id))

      res.end()

    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })


 
/*
 const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
  }
*/

  /*
  app.put("/usr/:id", async (req: Request, res: Response) => {
    try {

      const id = req.params.id
      const salario:number= req.body.salario  
console.log(id)
console.log(salario)
     console.log(await updateActor(id,salario))

      res.end()

    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })


 const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

  app.delete("/usuario/:id", async (req: Request, res: Response) => {
    try {

      const id = req.params.id

console.log(id)

     console.log(await deleteActor(id))

      res.end()

    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })

 const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });

    return result[0].average;
  };

  app.get("/usr/:gender", async (req: Request, res: Response) => {
    try {

      const gender = req.params.gender

console.log(gender)

     console.log(await avgSalary(gender))

      res.end()

    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })*/