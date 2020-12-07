import { Router } from 'express';
import UserRoute from './routes/loginRoute';
import AccountRoute from './routes/accountRoutes';

require('dotenv/config');

const routes = Router();

routes.use('/api/user', UserRoute);
routes.use('/api/account', AccountRoute);

routes.get('/api/teste', (req, res) => {
    console.log(req.ip)
    res.send(`<h1>${process.env.TESTE}</h1>`);
    
})

export default routes;