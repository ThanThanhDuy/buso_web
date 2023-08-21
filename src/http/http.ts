import axios, { AxiosInstance } from 'axios'

class Http {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.BASE_URL_API,
            timeout: 3000,
            headers: {
                'Content-Type': 'application/json',
                Authorization: ''
            }
        })
    }
}

const http = new Http().instance

export default http
