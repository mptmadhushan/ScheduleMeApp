import HttpClient from '../config/HttpClient';

export default class AuthService {
    static login = (data) => {
        return HttpClient.post('/api/users/signin', data);
    }
}