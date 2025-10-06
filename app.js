const express = require('express');
const path = require('path')
require('dotenv').config();
const app = express();


const userController = require('./controller/userController')

const bodyparser = require('body-parser');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',userController.getPage)



app.listen(process.env.PORT || 3000,()=>{
    console.log(`server is runnig in the port ${process.env.PORT}`)
})
