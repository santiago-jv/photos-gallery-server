const {Schema, model} = require('mongoose');


const PhotoSchema = new Schema({
    image:{type:String, required:true},
},{timestamps:true})

PhotoSchema.set('toJSON', {
    transform:(document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Photo = model('Photo', PhotoSchema)
module.exports = Photo