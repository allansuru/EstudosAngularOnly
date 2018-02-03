
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { CanActivate, Router } from "@angular/router";


@Injectable()

export class AdminAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService) {

    }

    canActivate() {
        let userCurrent = this.authService.currentUser;
        if (userCurrent && userCurrent.admin) return true;

        this.router.navigate(['/no-access']);

        return false;
    }
}