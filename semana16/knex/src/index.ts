import {connection} from './connection'
import express, { Request, Response } from "express";
import cors from "cors";
import app from './app'
import { count } from 'console';

 

export const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
     return result[0][0]
  }
  
  const createActor = async (id: string, salary: number, name:string, birthDate:string,gender:string)
  : Promise<any> => {
     await connection("Actor")
       .insert({
         salary: salary,
         id:id,
         nome:name,
         birth_date:birthDate,
         gender:gender
       })
   };



   app.put("/actor", async (req: Request, res: Response) => {
     try {
      console.log(await createActor(
         req.body.id,
         req.body.salary,
         req.body.name,
         req.body.birthDate,
        req.body.gender
       )) 
   
       res.status(200).send();
     } catch (err) {
       res.status(400).send({
         message: err.message,
       });
     }
   });



 app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
 
    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })


 const getActorByName = async (nome: string): Promise<any> => {
    const [result] = await connection.raw(`
      SELECT * FROM Actor WHERE nome = "${nome}"
    `)
     return result
   
  }
 
 app.get("/user/:nome", async (req: Request, res: Response) => {
    try {
      const nome = req.params.nome
  
     console.log(await getActorByName(nome))
  
      res.end()
 
    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })

 const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
  }

   
 app.get("/usuario/:gender", async (req: Request, res: Response) => {
    try {
      const gender = req.params.gender

     console.log(await countActors(gender))
  
      res.end()
 
    } catch (error) {
        console.log(error.message)
      res.status(500).send("Unexpected error")
    }
 })


 const updateActor = async (id: string, salary: number)
 : Promise<any> => {
 const result =  await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);

      return result
  };

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
 })


 