import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import infosUser from './endpoints/infosUser'
import createRecipes from './endpoints/createRecipes'
import { hash, compare } from "./services/hashManager";


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.get('/user/profile', infosUser)
app.post('/recipe', createRecipes)