import createApiClient from "./api.service";
class TownService {
    constructor(baseUrl = "/api/towns") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/getAll")).data;
    }
   
    async create(data) {
        return (await this.api.post("/create", data)).data;
    }
    async createContent(data) {
        return (await this.api.post("/createContent", data)).data;
    }
    async getContent(id){
        return (await this.api.get(`getContent/${id}`)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`get/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`update/${id}`,data)).data;
    }
    async updateContent(id, data) {
        return (await this.api.put(`updateContent/${id}`,data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`delete/${id}`)).data;
    }
    async deleteContent(id) {
        return (await this.api.delete(`deleteContent/${id}`)).data;
    }
}
export default new TownService();