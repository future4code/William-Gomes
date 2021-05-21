import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  name: string,
  cpf: number,
  saldo: number,
  age: number,
  extrato:any[]
  
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      name: "William",
      cpf: 11111111111,
      saldo:80,
      age: 18,
      extrato: [{
        valor:5,
        data:'15/4/210',
        descricao:'ifood',
      }]
  }
 
]

const app = express()
app.use(express.json())
app.use(cors())

/*app.get("/conta/", (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id)

    if (isNaN(id)) {
      throw new Error("Id must be passed, and must be a number")
    }

    const result = users.filter((user) => user.id === id)

    if (!result.length) {
      throw new Error("User not found")
    }

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})*/

app.get("/userSaldo/:cpf", (req: Request, res: Response) => {
  try {
    const name = (req.query.name)
    const cpf = Number(req.params.cpf)
    
    const result = users.find((user)=>{
     if(user.name != name){
      throw new Error("Name not exist")
     } if(user.cpf != cpf||!cpf){
      throw new Error("Cpf not exist or not a number")
     }else{
      return user.cpf === cpf
     }
    })

    res.status(200).send({saldo:result?.saldo})
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.put("/addSaldo/:cpf", (req: Request, res: Response) => {
  try {
    const name = (req.query.name)
    const cpf = Number(req.params.cpf)
    const addSaldo = Number(req.body.addSaldo)
   
    const result = users.find((user)=>{
     if(user.name != name){
      throw new Error("Name not exist")
     } if(user.cpf != cpf||!cpf){
      throw new Error("Cpf not exist or not a number")
     }else{
      return user.cpf === cpf
     }
    })

   /* const mapResult = result.map((info)=>{
      info.saldo+addSaldo
    })*/
   
    

     //   console.log(newUser)
    res.status(200).send()
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})


app.post("/createUser", (req: Request, res: Response) => {
  try {
    const cpf = req.body.cpf
    const name = req.body.name
    const saldo = req.body.saldo
    const extrato = req.body.extrato
    const age = req.body.age

    const newUser = {
      cpf,
      name,
      saldo,
      extrato,
      age
    }

    users.push(newUser)

    res.status(200).send({
      message: "ok",
      user: newUser
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

/*app.put("/users", (req: Request, res: Response) => {
  try {
    const { name, email, type, age, id } = req.body

    const newUser: User = {
      name,
      id,
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(200).send("user created successfuly")
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})*/

// app.delete("/users/:id", (req: Request, res: Response) => {
//   try {
//     const params = req.params
//     const id = Number(req.params.id)

//     // users => user === id => remove
//     // resposta => deu tudo certo / usuario n encontrado 
//   } catch (error) {
//     //
//   }
// })

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
