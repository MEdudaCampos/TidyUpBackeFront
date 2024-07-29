const express = require('express');

const routes = express.Router();
const users = [{
    id: 1,
    name: 'Duda',
    cpf: '0000000000',
    password: '123456'
}]

routes.post('/', (request, response)=>{
    const { cpf, password } = request.body;
    
    const user = users.find(user => user.cpf === cpf && user.password === password)

    //validacao
    if(user){
         response.status(200).json(user)
         return
    } 
    
    // return response.status(401).json({message: 'Usuário ou senha incorretos'})
});

module.exports = routes;
