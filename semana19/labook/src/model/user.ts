export type authenticationData = {
    id: string
 }

 export class User {
    //atributos da classe (acesso com this)
    private id: string;
    private name: string;
    private email: string;
    private password: string;
 
    constructor(
       //parametros do construtor
       id: string,
       name: string,
       email: string,
       password: string,

    ) {
       this.id = id;
       this.name = name;
       this.email = email;
       this.password = password;
       
    }
 
    public getId() { return this.id };
    public getName() { return this.name };
    public getEmail() { return this.email };
    public getPasword() { return this.password };

 
 }
 
 export type userData = {
    name: string,
    email: string,
    password: string,
 }
 
 export type user = userData & { id: string }
 
 export const toUserModel = (
    input: any
 ): user => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       password: input.password,

    }
 }
 
 export const toUserClassModel = (
    input: any
 ): User => {
    return new User(
       input.id,
       input.name,
       input.email,
       input.password,

    )
 }