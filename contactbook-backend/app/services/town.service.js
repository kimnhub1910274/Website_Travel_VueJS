const { ObjectId } = require("mongodb");
class TownService {
    
    constructor(client) {
        this.Town = client.db().collection("towns");
        this.Content = client.db().collection("places");
    }
    
    extractTownData(payload,file) {
        if(file === undefined){
            var photo = payload.photo;
        }else{
            var photo = file.filename;
        }
        const town = {
            name: payload.name,
            photo: photo,
            description: payload.description,
            
        };
        console.log(town);
        
        // Remove undefined fields
        Object.keys(town).forEach(
            (key) => town[key] === undefined && delete town[key]
        );
        return town;
    }
    

    async create(payload,file) {
        const town = this.extractTownData(payload,file);
        const findTown = await this.Town.findOne({
            name: payload.name
        })
        if(!findTown){
            const result = await this.Town.findOneAndUpdate(
                town,
                { $set: { createAt: new Date()} },
                { returnDocument: "after", upsert: true }
            )
            if(result.value){
                return{
                    errCode:0,
                }
            }
        }
        else{
            return {
                errCode: 1,
                message: "Your town is already in used, Please try another town!"
            }
        }
    }

    async createContent(payload,file) {
        const findTown = await this.Town.findOne({
            name: payload.name
        })
        if(findTown){
            for(var i=0;i<file.length;i++){ 
                if(file.length > 1){
                    var content = {
                        nameContent: payload.nameContent[i],
                        content: file[i].filename,
                        _idTown:findTown._id
                    }

                }else{
                    var content = {
                        nameContent: payload.nameContent,
                        content: file[i].filename,
                        _idTown:findTown._id
                    }                    
                }
                var result = await this.Content.findOneAndUpdate(
                    content,
                    { $set: { createAt: new Date()} },
                    { returnDocument: "after", upsert: true }
                )
                
            }
            if(result.value){
                return{
                    errCode:0,
                    message:'Town was added successfully'
                }
            }
        }
        else{
            return {
                errCode: 1,
                message: "Your town not found!"
            }
        }
    }
    
    async find(filter){
        const cursor = await this.Town.find(filter);
        if(cursor){
            return {
                errCode: 0,
                towns: await cursor.toArray()
            };
        }else{
            return {
                errCode: 1,
                message:"Town's not found!"
            };
        }
    }

    async findByName(name){
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i"},
        });
    }

    async findById(id) {
        return await this.Town.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async findContentByIdTown(id) {
        const content = await this.Content.find({
            _idTown: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        if(content){
            return{
                errCode:0,
                contents: await content.toArray()
            }
        }else{
            return{
                errCode:1,
                contents: '',
            }
        }
    }

   

    async findContentById(id) {
        return await this.Content.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    

    async update(id, payload,file) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractComicData(payload,file)
        const result = await this.Town.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        
        if(result.value){
            return {
                errCode: 0,
            }
        }else{
            return {
                errCode: 1,
                message: 'Town not found!'
            }
        }
    }

    async updateContent(id, payload,file) {
        const filter = {
            _idTown: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };  
        if(Array.isArray(file) && file.length){
            console.log('FILE');
            for(var i=0;i<file.length;i++){ 
                console.log(payload.nameContent.length-file.length);
                if(file.length > 1){
                    var content = {
                        nameContent: payload.nameContent[i],
                        content: file[i].filename,
                        _idTown:findTown._id
                    }
                }else{
                    var content = {
                        nameContent: payload.nameContent,
                        content: file[i].filename,
                        _idTown:findTown._id
                    }                    
                }
                var result = await this.Content.findOneAndUpdate(
                    filter,
                    { $set: content },
                    { returnDocument: "after", upsert: true }
                )
                if(result.value){
                    return {
                        errCode: 0,
                        message:'Town was updated successfully'
                    }
                }else{
                    return {
                        errCode: 1,
                        message: 'Town not found!'
                    }
                }
            }
        }else{
            console.log('UNDEFINE');
            var content = {
                nameContent: payload.nameContent,
                content: payload.content,
            }
            var result = await this.Content.findOneAndUpdate(
                filter,
                { $set: content },
                { returnDocument: "after", upsert: true }
            )
            
            if(result.value){
                return {
                    errCode: 0,
                    message:'Town was updated successfully'
                }
            }else{
                return {
                    errCode: 1,
                    message: 'Town not found!'
                }
            }
            
        }

    }

    async delete(id) {
        const result = await this.Town.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        const resultContent = await this.Content.deleteMany({
            _idTown: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        if(result.value && resultContent.deletedCount){
            return{
                errCode:0,
                message:"Town was deleted successfully"
            }
        }else{
            return {
                errCode:1,
                message:"Town not found"
            }
        }
    }
    async deleteContent(id) {
        const result = await this.Content.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        
        if(result.value){
            return{
                errCode:0,
                message:"Place was deleted successfully"
            }
        }else{
            return {
                errCode:1,
                message:"Place not found"
            }
        }
    }
    async deleteAll() {
        const result = await this.Town.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = TownService;