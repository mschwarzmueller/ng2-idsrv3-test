import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from './services';

import '../styles.scss';

require('./app.component.global.scss');
require('../assets/images/angular2.png');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private router: Router, private securityService: SecurityService) {}

    login() {
        this.securityService.login();
    }

    logout() {
        this.securityService.logout();
    }

    isAuthenticated(): boolean {
        return this.securityService.isAuthenticated();
    }

    manualNavigation() {
        this.router.navigate(['home']);
    }
}
