const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');


app.use(express.json());

app.use('/' , require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`server is up and running on port ${port}`);
})