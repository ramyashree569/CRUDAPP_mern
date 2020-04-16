const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/postmanagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
err => {
    if(!err)
    console.log('Mongodb connection succeeded')
    else
    console.log('Mongodb connection error')
});