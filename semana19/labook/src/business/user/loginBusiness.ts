import { compare } from "../../services/hashManager"
import { generateToken } from "../../services/authenticator"
import { user } from "../../model/user"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"

export const LoginBusiness = async (
    email:string, 
    password:string
) => {
let message = "Success!"


if (!email || !password) {
  
   message = '"email" and "password" must be provided'
   throw new Error(message)
}

const user: user = await selectUserByEmail(email)

const passwordIsCorrect: boolean = await compare(password, user.password)

if (!passwordIsCorrect) {
 
   message = "Invalid credentials"
   throw new Error(message)
}

const token: string = generateToken({
   id: user.id
})

return token
}


