import createApiClient from "./api.service";
import axios from "axios";

class TestService {
    constructor(baseUrl = "/api/tests") {
        this.api = createApiClient(baseUrl);
    } 
    async getAll() {
        return (await this.api.get("/")).data;
    } 
    async create(data) {
        return (await this.api.post("/", data)).data;
    } 
    async deleteAll() {
        return (await this.api.delete("/")).data;
    } 
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    } 
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;}
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    upload(file, onUploadProgress) {
        let formData = new FormData();
    
        formData.append("file", file);
    
        return http.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress
        });
      }
    
      getFiles() {
        return http.get("/files");
      }
} 
export default new TestService();