const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/reviews',async (req,res)=>{
    const {message} = req.body

    const data = {message:message}
    const newMessage = new schemas.Messages(data)
    const saveMessage = await newMessage.save()
    if(saveMessage){
        res.send({
            header:"Thank you for sparing your time!",
            desc:"You'll be redirected to see reviews from others.",
            btn:"Proceed"
        })
    }else{
        res.send({
            header:"Apologies, fatal error occured!",
            desc:"I hope Danniel is aware of this and can fix it soon. Please try again later.",
            btn:"Ok!"
        })
    }
    res.end()
})
router.get('/messages', async(req,res)=>{// this is how to get data from collection mongoose
    const messages = schemas.Messages //look on model/schemas.js Message is a model
    
    const userMessages = await messages.find({}).exec()// gets data from messages collection
    if(userMessages){
        res.send(JSON.stringify(userMessages))
    }
})

module.exports = router