import { Router } from 'express';
require('dotenv/config');

const routes = Router();

routes.get('/api/teste', (req, res) => {
    console.log(process.env.TESTE)
    res.send(`<h1>${process.env.TESTE}</h1>`);
    
})

export default routes;