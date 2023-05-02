const { ObjectId } = require("mongodb");

class TownService {
    constructor(client) {
        this.Town = client.db().collection("towns");
    }
    extractTownData(payload) {
        const town = {
            name: payload.name,
            img1: payload.img1,
            description1: payload.description1,
            img2: payload.img2,
            description2: payload.description2,
            
        };
        // Remove undefined fields
        Object.keys(town).forEach(
            (key) => town[key] === undefined && delete town[key]
        );
        return town;
        } 
    async create(payload) {
        const town = this.extractTownData(payload);
        const result = await this.Town.findOneAndUpdate(
            town,
           
            { returnDocument: "after", upsert: true }
    );
    return result.value;
    }
    //findAll
    async find(filter) {
        const cursor = await this.Town.find(filter);
        return await cursor.toArray();
    } 
    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" },
        });
    }
    //findOne
    async findById(id) {
        return await this.Town.findOne({
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
    //update
    async update(id, payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractTownData(payload);
        const result = await this.Town.findOneAndUpdate(
            filter,
            {$set: update},
            {returnDocument: "after"}
        );
        return result.value;

   }
    async delete(id) {
        const result = await this.Town.findOneAndDelete({
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
    }
    async findFavorite() {
        return await this.find({ favorite: true });
    }
    async deleteAll() {
        const result = await this.Town.deleteMany({});
        return result.deletedCount;
    }
    
}
module.exports = TownService;