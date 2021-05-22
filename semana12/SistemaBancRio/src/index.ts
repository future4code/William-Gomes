import express, { Request, Response } from 'express'
import cors from 'cors'
import { info } from 'console'

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
  },
  {
    name: "Adeise",
    cpf: 22222222222,
    saldo:50,
    age: 20,
    extrato: [{
      valor:100,
      data:'25/8/2015',
      descricao:'cardume',
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

app.get("/users", (req: Request, res: Response) => {
  try {

    res.status(200).send(users)
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
    if(age < 18){
      throw new Error("Menores de Idade não podem ter conta bancária")
    }

    const newUser = {
      cpf,
      name,
      saldo,
      extrato,
      age
    }

    users.push(newUser)

    res.status(200).send({
      message: "user created successfuly",
      user: newUser
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})


app.get("/userSaldo", (req: Request, res: Response) => {
  try {
    const name = (req.query.name)
    const cpf = Number(req.query.cpf)
    const addSaldo = Number(req.body.addSaldo)


    const result = users.filter((user)=>{
     if(user.name != name){
      throw new Error("Name not exist")
     } if(user.cpf != cpf||!cpf){
      throw new Error("Cpf not exist or not a number")
     }else{
      return user.cpf === cpf
     }
    })
    const mapSaldo= result.map((info)=>{
    
        return info.saldo
      
     })
 
    const operationSaldo = result.map((info)=>{
       return info.saldo+addSaldo
     })

     const obj ={
       saldo:mapSaldo,

       newSaldo:operationSaldo
     }

    res.status(200).send(obj)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})


const date = new Date()
const dia = date.getDate()
const mes = date.getMonth()
const ano = date.getFullYear()


app.put("/pagament/:cpf", (req: Request, res: Response) => {
  try {
    const valor = Number(req.body.valor)
    const description = String(req.body.description)
    const date = String(req.body.date)
    const cpf = Number(req.params.cpf)
    const day:number = parseInt(date.slice(0,2))
    const month:number = parseInt(date.slice(3,5))
    const year:number = parseInt(date.slice(5,10))
   
    const result = users.filter((user)=>{
    return user.cpf === cpf  
     })
     const mapResult = result.map((infos)=>{
      if (valor > infos.saldo) {
        throw new Error("Saldo insuficiente")
      }
    })

      if(date === null){
        return "O pagamento será realizado hoje"
      }else if(year < ano ){
        throw new Error("Ano inválido") 
      }
       else if (month < mes){
        throw new Error("Mês inválido") 
    
      } else if(day < dia){
        throw new Error( "Dia inválido")
      }
      mapResult

    res.status(200).send(`--------- O pagamento está datado para ${day}/${month}/${year}`)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

/*app.post("/transferencia/:cpf", (req: Request, res: Response) => {
  try {
    const cpf = Number(req.params.cpf)
    const n = String(req.query.n)
    const valor = Number(req.body.valor)
    const cpfd= Number(req.body.cpfd)
    const nomed = String(req.body.nomed)
    console.log(cpfd)
    
  
  /*  const resultDestinatario = users.filter((user)=>{

       if(user.cpf != cpfd||!cpfd){
         console.log(user.cpf)
       throw new Error("Cpf do destinatario nao existe")
      }else{
       return user.cpf === cpfd
      }
     })
  
     const mapDestinatarioOld = resultDestinatario.map((info)=>{
      return info.saldo
     }) 
  
     const mapDestinatario = resultDestinatario.map((info)=>{
      return info.saldo + valor
     }) 
     
     const result = users.filter((user)=>{
     if(user.cpf != cpf||!cpf){
       throw new Error("Cpf not exist or not a number")
      }
      else{
       return user.cpf === cpf
      }
     })
  
     const mapResultOld = result.map((infos)=>{
      if (valor > infos.saldo) {
        throw new Error("Saldo insuficiente")
      }
      return infos.saldo 
    })
  
     const mapResult = result.map((infos)=>{
      return infos.saldo - valor
    })
  
     const transferencia = {
      antigoSaldoRemetente: mapResultOld,
    //  antigoSaldoDestinatario:mapDestinatarioOld,
      valorTansferido:valor,
      saldoRemetenteAtualizado:mapResult,
      //saldoDestinatarioAtualizado:mapDestinatario
     }
  
     
    res.status(200).send(transferencia)
  } catch (err) {
    res.status(400).send({
      message: err.message
      
    })
  }
  })
*/




app.listen(3003, () => {
  console.log('Server is running at port 3003')
  
})
