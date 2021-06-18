export type authenticationData = {
   id: string,

}

export type userCredentials = {
   email: string
   password: string
}

export type userPersonalInfo = {
   name: string
   email: string
   password: string
}

export type recipesInfo = {
   titulo: string
   descricao:string
   date_recipes:Date
}


export type user = {id: string, email: string, name: string, password: string}