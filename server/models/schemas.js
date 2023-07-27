const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userMessages = new Schema ({
    message:{type:String},
    entryDate:{type:Date, default:Date.now}
})

const Messages = mongoose.model('Messages',userMessages,'messages')
const mySchemas ={'Messages':Messages}

module.exports = mySchemas