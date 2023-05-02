const TownService = require("../services/town.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
// const { client } = require("../utils/mongodb.util");

exports.create = (req,res) => {
    res.send({ message: "create handler"});
};

exports.findAll = (req,res) => {
    res.send({ message: "findAll handler"});
};

exports.findOne = (req,res) => {
    res.send({ message: "findOne handler"});
};

exports.update = (req,res) => {
    res.send({ message: "update handler"});
};

exports.delete = (req,res) => {
    res.send({ message: "delete handler"});
};

exports.deleteAll = (req,res) => {
    res.send({ message: "deleteAll handler"});
};

exports.findAllFavorite = (req,res) => {
    res.send({ message: "findAllFavorite handler"});
};
exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Email là bắt buộc"));
    }
    try{
        const contactService = new TownService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, "Xảy ra lỗi trong quá trình thêm tỉnh thành")
        );
    }
};

//findAll
exports.findAll = async (req, res, next) => {
    let documents = [];
    try{
        const contactService = new TownService(MongoDB.client);
        const { name } = req.query;
        if(name) {
            documents = await contactService.findByName(name);
        }else{
            documents = await contactService.find({});
        }
    }catch (error){
        return next(
            new ApiError(500, "Lỗi")
        );
    }
    return res.send(documents);
};
// findOne
exports.findOne = async (req, res, next) => {
    try{
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.findById(req.params.id);
        if(!document ) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, `Error retrieving contact with id = ${req.params.id}`)
        );
    }
};
exports.authHeader= async (req, res, next) => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
