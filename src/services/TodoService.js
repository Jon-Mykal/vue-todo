import axios from 'axios'



export default class {
   apiClient;
    constructor(){
        this.apiClient = axios.create({
            baseURL: 'https://localhost:6001/api',
            withCredentials: false,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    getTodos() {
        return this.apiClient.get('/todoitems');
    }

    getTodo(id) {
        return this.apiClient.get(`/todoitems/${id}`)
    }
}

