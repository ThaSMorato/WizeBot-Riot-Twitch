import { Router } from 'express';
import UserController from '../controllers/UserController';


    const route = Router();

    //route.use(); middleware
    route.get('/',UserController.loginWithSession, UserController.login);
    route.post('/', UserController.singUp);
    route.get('/email/validate', UserController.emailHandler);

export default route;