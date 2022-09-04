import { Router } from 'express';

// Controllers 
import UserController from './controllers/UseController'


const routes = Router();

routes.get('/user', UserController.Index)
routes.get('/user', UserController.Show) // Rota passando o ID
routes.post('/user', UserController.Create)
routes.put('/user', UserController.Update) // Rota passando o ID
routes.delete('/user', UserController.Delete) // Rota passando o ID


export default routes;