const mongoose = require("mongoose")
const joi = require("joi")
const schema = mongoose.schema({
    computers : {type : Image},
    laptop : {type: Image},
    ipads : {type : Image},
    powerbank : {type: Image},
    mobilephones : {type : Image},
    earpods : {type: Image}
})
const User = new mongoose.model("User", schema)

function validate(body){
    const schema = joi.object({
       computers.joi.Image(),
       laptop.joi.Image(),
       ipads.joi.Image(),
       powerbank.joi.Image(),
       earpods.joi.Image(),
    });
    return  schema.validate(body)

}
module.exports= {User, validate}