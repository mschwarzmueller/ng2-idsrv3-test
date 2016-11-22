import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SecurityService } from '../security.service';

@Injectable()
export class PricingGuardService implements CanActivate {

    constructor(private securityService: SecurityService, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {

        if (!this.securityService.isAuthenticated()) {
            this.securityService.login();
            return false;
        }

        return true;
    }
}
