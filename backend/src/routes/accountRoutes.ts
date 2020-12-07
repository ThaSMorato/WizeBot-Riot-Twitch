import { Router } from 'express';
import AccountController from '../controllers/AccountController';


    const route = Router();

    //route.use(); middleware
    route.post('/registerMain', AccountController.registerMainAccount);

export default route;