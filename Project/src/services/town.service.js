import createApiClient from "./api.service";
class TownService {
    constructor(baseUrl = "/api/towns") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/getAll")).data;
    }
    async get(id) {
        return (await this.api.get(`get/${id}`)).data;
    }

    async getContent(id) {
        return (await this.api.get(`getContent/${id}`)).data;
    }
    async getContentById(id) {
        return (await this.api.get(`getContentById/${id}`)).data;
    }
    async findTownByName(search) {
        return (await this.api.get(`findTownByName/${search}`)).data;
    }
}
export default new TownService();