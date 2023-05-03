import createApiClient from "./api.service";
class ContactService {
    constructor(baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    } 

    async create(data) {
        return (await this.api.post("/", data)).data;
    } 

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    } 
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;}

    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
} 
export default new ContactService();