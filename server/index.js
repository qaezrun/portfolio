const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
require('dotenv/config')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

const corsOption = {
    origin:"*",
    credential: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption))
app.use('/',router)



const dbOptions ={maxPoolSize:50,wtimeoutMS:2500,useNewUrlParser:true}
mongoose.connect(process.env.DB_URI,dbOptions)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err))

const port = 4000
const server = app.listen(port,()=>{
    console.log( `Server is running on port ${port}`)
})