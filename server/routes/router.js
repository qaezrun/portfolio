const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.get('/', async(req,res)=>{// this is how to get data from collection mongoose
    if(req.cookies.alreadySentMessage){
        res.send(true)
    }else{
        res.send(false)
    }
})


router.post('/messages',async (req,res)=>{
    const {message,codeName} = req.body

    const data = {message:message,codeName:codeName}
    const newMessage = new schemas.Messages(data)
    const saveMessage = await newMessage.save()
    if(saveMessage){
        res.cookie('alreadySentMessage',true)
        res.send({
            header:"Thank you for sparing your time!",
            desc:"Your participation is well appreciated. Click proceed to view other content I have created.",
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
router.get('/userMessages', async(req,res)=>{// this is how to get data from collection mongoose
    const messages = schemas.Messages //look on model/schemas.js Message is a model
    
    const userMessages = await messages.find({}).exec()// gets data from messages collection
    if(userMessages){
        res.send(JSON.stringify(userMessages))
    }
})


router.post('/emails',async (req,res)=>{
    const {email} = req.body

    const data = {email:email}
    const newEmail = new schemas.Emails(data)
    const saveEmail = await newEmail.save()
    if(saveEmail){
        res.send({
            header:"Thank you for your patience.",
            desc:"Once the content is updated, you will receive a notification. See you later!",
            btn:"Ok!"
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

router.get('/userEmails', async(req,res)=>{// this is how to get data from collection mongoose
    const emails = schemas.Emails //look on model/schemas.js Message is a model
    
    const userEmails = await emails.find({}).exec()// gets data from messages collection
    if(userEmails){
        res.send(JSON.stringify(userEmails))
    }
})

module.exports = router