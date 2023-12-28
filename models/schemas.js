const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userMessages = new Schema ({
    message:{type:String},
    codeName:{type:String},
    entryDate:{type:Date, default:Date.now}
})

const userToNotify = new Schema ({
    email:{type:String},
    entryDate:{type:Date, default:Date.now}
})

const Messages = mongoose.model('Messages',userMessages,'messages')
const Emails = mongoose.model('Emails',userToNotify,'emails')
const mySchemas ={'Messages':Messages,'Emails':Emails}

module.exports = mySchemas