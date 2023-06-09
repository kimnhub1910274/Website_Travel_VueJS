const { ObjectId } = require("mongodb");

class UserService {
    constructor(client) {
        this.User = client.db().collection("users");
    }
    extractUserData(payload) {
        const user = {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            
        };
        // Remove undefined fields
        Object.keys(user).forEach(
            (key) => user[key] === undefined && delete user[key]
        );
        return user;
        } 
    async create(payload) {
        const user = this.extractUserData(payload);
        const result = await this.User.findOneAndUpdate(
            user,
            { $set: { favorite: user.favorite === true } },
    );
    return result.value;
    }
    //findAll
    async find(filter) {
        const cursor = await this.User.find(filter);
        return await cursor.toArray();
    } 
    async findByEmail(email) {
        return await this.find({
            email: { $regex: new RegExp(email) },
        });
    }
    //findOne
    async findById(id) {
        return await this.User.findOne({
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
    //update
    async update(id, payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractUserData(payload);
        const result = await this.User.findOneAndUpdate(
            filter,
            {$set: update},
            {returnDocument: "after"}
        );
        return result.value;

   }
    async delete(id) {
        const result = await this.User.findOneAndDelete({
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
    }

    async deleteAll() {
        const result = await this.User.deleteMany({});
        return result.deletedCount;
    }
    
}
module.exports = UserService;