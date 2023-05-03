const TownService = require("../services/town.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");


exports.create = async (req, res, next) => {
    console.log(req.body);
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    try{
        const townService = new TownService(MongoDB.client);
        const document = await townService.create(req.body,req.file);
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creating the towns")
        );
    }
};


exports.createContent = async (req, res, next) => {
    
    try{
        const townService = new TownService(MongoDB.client);
        const document = await townService.createContent(req.body,req.files);
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creating the towns")
        );
    }
};

exports.findAll = async (req,res,next) => {
    let documents = [];
    try {
        const townService = new TownService(MongoDB.client);
        const { name } = req.query;
        if(name){
            documents = await townService.findByName(name);
        }else{
            documents = await townService.find({});
        }
        
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving towns")
        );
    }
    return res.send(documents);
}

exports.findOne = async (req,res,next)=>{
    try {
        
        const townService = new TownService(MongoDB.client);
        const document = await townService.findById(req.params.id);
        console.log(req.params.id)
        console.log(document);
        if(!document){
            return next(new ApiError(404, "Town not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving town with id=${req.params.id}`
            )
        );
        
    }
}

exports.findContents = async (req,res,next)=>{
    try {
        const townService = new TownService(MongoDB.client);
        const document = await townService.findContentByIdTown(req.params.id);
        if(!document){
            return next(new ApiError(404, "Town not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving town with id=${req.params.id}`
            )
        );
        
    }
}

exports.findTownByName = async (req,res,next)=>{
    try {
        const townService = new TownService(MongoDB.client);
        const document = await townService.findByName(req.params.search);
        if(!document){
            return next(new ApiError(404, "Town not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving town with id=${req.params.id}`
            )
        );
        
    }
}


exports.findOneContentById = async (req,res,next)=>{
    try {
        const townService = new TownService(MongoDB.client);
        const document = await townService.findContentById(req.params.id);
        if(!document){
            return next(new ApiError(404, "Town not found"));
        }
        console.log(document);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving town with id=${req.params.id}`
            )
        );
        
    }
}


exports.update = async(req,res,next)=>{
    //console.log(req.body)
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const townService = new TownService(MongoDB.client);
        const document = await townService.update(req.params.id, req.body,req.file);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, `Error updating town with id=${req.params.id}`)
        );
    }
};
exports.updateContent=async(req,res,next)=>{
    console.log(req.body);
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const townService = new TownService(MongoDB.client);
        const document = await townService.updateContent(req.params.id, req.body,req.files);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, `Error updating content with id=${req.params.id}`)
        );
    }
};


exports.delete = async(req,res,next)=>{
    try {
        const townService = new TownService(MongoDB.client);
        const document= await townService.delete(req.params.id);
        
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete town with id=${req.params.id}`
            )
        );
    }
};

exports.deleteContent = async(req,res,next)=>{
    try {
        const townService = new TownService(MongoDB.client);
        console.log(req.params.id);
        const document= await townService.deleteContent(req.params.id);
        
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete town with id=${req.params.id}`
            )
        );
    }
};

exports.deleteAll = async(_req,res,next)=>{
    try {
        const townService = new TownService(MongoDB.client);
        const deletedCount = await townService.deleteAll;
        return res.send({
            message: `${deletedCount} towns were deleted successfully` 
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the towns")
        );
    }
};

exports.findTrending = async(_req,res,next)=>{
    try{
        const townService = new TownService(MongoDB.client);
        const documents = await townService.findTrending();
        return res.send(documents);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creating the towns")
        );
    }
};