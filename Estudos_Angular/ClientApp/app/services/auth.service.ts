import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { AuthHttp, AuthConfig, JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
    }

    login(credentials: any) {
        return this.http.post('/api/authenticate', JSON.stringify(credentials))
            .map(response => {
                let result = response.json();
                if (result && result.token) {
                    localStorage.setItem('token', result.token);
                    console.log('Result: ', result);
                    return true;
                }
                return false;
            
            })
            .catch(this.handleError);
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        return tokenNotExpired();
            
     /*   let jwtHelper = new JwtHelper();
        let token = localStorage.getItem('token');

        if (!token)
            return false;

        let expirationDate = jwtHelper.getTokenExpirationDate(token as string);
        let isExpired = jwtHelper.isTokenExpired(token as string);

        console.log('Expiration: ', expirationDate);
        console.log('isExpired: ', isExpired)

        return !isExpired; */
    }
    private handleError(error: Response) {
        console.log('Error: ', error);
        return Observable.throw(error.json());
    }
}

