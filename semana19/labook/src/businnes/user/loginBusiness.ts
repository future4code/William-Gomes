import { compare } from "../../services/hashManager"
import { generateToken } from "../../services/authenticator"
import { user } from "../../model/user"


export const loginBusiness = async (
    email:string, 
    password:string
) => {
let message = "Success!"


if (!email || !password) {
  
   message = '"email" and "password" must be provided'
   throw new Error(message)
}

const queryResult: any = await connection("labook_users")
   .select("*")
   .where({ email })

if (!queryResult[0]) {
   message = "Invalid credentials"
   throw new Error(message)
}

const user: user = {
   id: queryResult[0].id,
   name: queryResult[0].name,
   email: queryResult[0].email,
   password: queryResult[0].password
}

const passwordIsCorrect: boolean = await compare(password, user.password)

if (!passwordIsCorrect) {
 
   message = "Invalid credentials"
   throw new Error(message)
}

const token: string = generateToken({
   id: user.id
})
}


