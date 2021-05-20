//EX1 - A) Get 
//EX2 - B)/users


import express, { Request, Response } from 'express'
import cors from 'cors'

enum TYPES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: TYPES.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: TYPES.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type:TYPES.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: TYPES.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: TYPES.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: TYPES.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (error) {
    {
      res.status(404).send(error.message) 
    }
  }
  
})

app.get("/users/type", (req: Request, res: Response) => {
  try {
    const type = req.query.type as string
    
    const result = users.filter((user) => user.type === type)
    res.status(200).send(result)
  } catch (error) {
    {
      messege:error.messege
    }
  }
 //A)Como query para que o usuário possa digitar
 //B)Usando o Enum. 
})

app.get("/users/name", (req: Request, res: Response) => {
  try {
    const name = req.query.name as string
  
    
    const result = users.filter((user) => user.name === name)

    if (!result.length) {
      throw new Error("User not found")
    }
  
    res.status(200).send(result)
  } catch (error) {
    {
      res.status(404).send(error.message) 
    }
  }
 //A) Query 
})

app.put("/users", (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const name = req.body.name
    const email = req.body.email
    const type = req.body.type
    const age = req.body.age

    const newUser = {
      id,
      name,
      email,
      type,
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
  //A)Nada
  //B)Sim, pois estamos lidando com uma requisição local
})



app.listen(3003, () => {
  console.log('Server is running at port 3003')

})
