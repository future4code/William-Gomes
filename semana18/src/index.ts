import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {generateId} from "./services/idGenerator";
import {generateToken, getTokenData} from "./services/authenticator"
import login from "./endpoints/login";
import getUserByEmail from './endpoints/getUserByEmail'


app.post('/user/signup', createUser);
app.post('/user/login', login);
app.put('/user/edit/', editUser);
app.get('/user/:email', getUserByEmail);