const Photo = require("../models/Photo")

const photosController = {}

photosController.getPhotos = async (request,response) =>{
    try {
        const photos = await Photo.find({})
        return response.status(200).json(photos)
    } catch (error) {
        console.log(error)
        return response.status(500).json({error})
    }
}

photosController.getPhoto = async (request,response) =>{
    const {id} = request.params
    try {
        const photo = await Photo.findById(id)
        console.log(photo)
        return response.status(200).json(photo)
    } catch (error) {
        console.log(error)
        return response.status(400).json({error:'Bad request'})
    }
}
photosController.createPhoto = async (request,response) =>{
    const {image} = request.body
    try {
        const photo = await Photo.create({image})
        console.log(photo)
        return response.status(201).json(photo)
    } catch (error) {
        console.log(error)
        return response.status(400).json({error})
    }
}
photosController.deletePhoto = async (request,response) =>{
    const {id} = request.params
    try {
        await Photo.findOneAndDelete({_id:id})
        return response.status(200).json({message:'Deleted'})
    } catch (error) {
        return response.status(400).json({error})
    }
}
module.exports = photosController