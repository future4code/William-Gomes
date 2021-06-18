import { Request, Response } from "express";
import { LoginBusiness } from "../../business/user/loginBusiness"


export const login = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
       const { email, password } = req.body
 
       const token: string = await LoginBusiness(email, password)
 
       res.send({
          message: "Usuário logado!",
          token
       })
 
    } catch (error) {
       res.status(400).send(error.message)
    }
 }