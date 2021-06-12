import express from 'express'
import cors from 'cors'
import { Request, Response } from "express";
import connection from "../connection";


export default async function getUserByEmail(
    req: Request,
    res: Response
) {

    try {
        const  email  = req.params.email;
   
console.log(email)

        const queryResult = await connection.raw(
        `  SELECT * from to_do_list_users
            where email = "${email}";
        `)

        const user = queryResult[0][0];

        if(!user){
            throw new Error("User not found")
        }
      
         res.status(200).send(user);

    } catch (error) {
        res.status(400).send({error: error.message});

    }


}