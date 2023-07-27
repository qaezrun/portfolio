const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/reviews',async (req,res)=>{
    const {message} = req.body

    const data = {message:message}
    const newMessage = new schemas.Messages(data)
    const saveMessage = await newMessage.save()
    if(saveMessage){
        res.send('Message Successfully Sent')
    }
    res.end()
})
module.exports = router
