require('./db')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
var postMessageRoutes=require('./controller/postMessagecontroller')



var app=express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))
app.listen(5000,()=>{
    console.log('server started at port 5000');
})

app.use('/postMessages',postMessageRoutes)