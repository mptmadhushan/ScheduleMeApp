import axios from 'axios';

export default class HttpClient {
    static baseUrl = '';
    
    static async post(endpoint, body = {}) {
        let headers = {
            'Content-Type': 'application/json',
        };

        const config = {
            headers
        };

        return axios.post((HttpClient.baseUrl + endpoint), body, config);
    }

    static async get(endpoint) {
        let headers = {
            'Content-Type': 'application/json',
        };

        const config = {
            headers
        };

        return axios.get((HttpClient.baseUrl + endpoint), config);
    }
}