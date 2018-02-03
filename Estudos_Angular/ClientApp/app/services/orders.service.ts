
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { AuthHttp } from "angular2-jwt";


@Injectable()

export class OrdersService{

    constructor(
        private authHttp: AuthHttp,
        private authService: AuthService) {

    }

    getOrders() {
        // Adicionando autorização na minha api, ou seja, somente quem é autorizado pode ver essa budega
        // Se eu usar AuthHttp ele internamente já implmenta o header

        /*
        let headers = new Headers();
        let token = localStorage.getItem('token');
        headers.append('Authorization', 'Bearer ' + token);

        let options = new RequestOptions({ headers: headers });  */


        return this.authHttp.get('/api/Order')
            .map(response => response.json())

    }

}