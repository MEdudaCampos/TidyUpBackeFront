const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes.js')


app.use(express.json());
app.use(cors())
app.use(routes);



app.get('/', (request, response) => {
    response.send('Hello World!');	
});

app.listen(3000, ()=>{
    console.log('Port 3000 ON')
});