import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url).then().then(responseBody),
    post: (url, body) => axios.post(url, body).then().then(responseBody),
    put: (url, body) => axios.put(url, body).then().then(responseBody),
    patch: (url, body) => axios.patch(url, body).then().then(responseBody),
    del: (url) => axios.delete(url).then().then(responseBody)
};

const ToDoList = {
     getToDo: () => requests.get('/ToDo'),
     delete: (id) => requests.del(`/ToDo?id=${id}`),
     create: (togo) => requests.post(`/ToDo`, togo),
}

export default class ApiStoreService {
    async getToDo() {
        console.log("get");
        const data = await ToDoList.getToDo()
            .then((responce) => {
                return {
                    data: responce
                }
            }).catch(error => {
                return error.response;
            })
        return data;
    }
    
    async deleteTodo(todo) {
        const data = await ToDoList.delete(todo)
            .then((responce) => {
                return {
                    data: responce
                }
            }).catch(error => {
                return error.response;
            })
        return data;
    }  
    
    async createTodo(todo) {
        const data = await ToDoList.create(todo)
            .then((responce) => {
                return {
                    data: responce
                }
            }).catch(error => {
                return error.response;
            })
        return data;
    }
}

