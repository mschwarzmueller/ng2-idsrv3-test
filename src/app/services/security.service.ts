import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { OAuthService } from 'angular2-oauth2/oauth-service';

import { environment } from '../../environments/environment';

@Injectable()
export class SecurityService {

    constructor(
        private router: Router,
        private oAuthService: OAuthService) {

        // Set up the login endpoint (derived from the Identity Server's URL)
        this.oAuthService.loginUrl = environment.IdSrvUri + '/connect/authorize';
        // Set up the URL of the SPA to redirect the user to after login
        this.oAuthService.redirectUri = environment.RedirectUri; // window.location.origin + "/index.html";
        // Set up the SPA's client id. A client with this client id should be registered in the Identity Server
        this.oAuthService.clientId = environment.ClientId;
        // Set up the URL of the Identity Server that has to be mentioned within the token
        this.oAuthService.issuer = environment.IdSrvUri;
        // Set up the scopes for the permissions the client should request
        this.oAuthService.scope = 'openid profile roles';
        // Set up the SPA toalso request an id_token via OpenId Connect (OIDC) in addition to the OAuth2-based access_token
        this.oAuthService.oidc = true;
        // Set up the OAuthService to session storage instead of local storage
        this.oAuthService.setStorage(sessionStorage);
        // Set up the logout endpoint (derived from the Identity Server's URL)
        this.oAuthService.logoutUrl = environment.IdSrvUri + '/connect/endsession?id_token_hint={{id_token}}';

        // console.log(this.oAuthService.loginUrl);
        // console.log(this.oAuthService.redirectUri);
        // console.log(this.oAuthService.clientId);
        // console.log(this.oAuthService.issuer);
        // console.log(this.oAuthService.scope);
        // console.log(this.oAuthService.oidc);
        // console.log(this.oAuthService.logoutUrl);

        // This method just tries to parse the token within the url when
        // the auth-server redirects the user back to the web-app
        // It dosn't initiate the login
        this.oAuthService.tryLogin({
            // the login successfull callback
            onTokenReceived: context => {
                console.log('logged in callback fired');
                this.router.navigate(['home']);
                // this.router.navigate(['/home']);
                // this.router.navigateByUrl('/home');
            }
        });
    }


    public get name() {
        let claims = this.oAuthService.getIdentityClaims();
        if (!claims) {
            return null;
        }
        return claims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'];
    }

    public login(returnUrl: string = null) {
        // trigger the login flow
        this.oAuthService.initImplicitFlow();
    }

    public logout() {
        // trigger the logout flow
        this.oAuthService.logOut();
    }

    public isAuthenticated() {
        return this.oAuthService.hasValidAccessToken() && this.oAuthService.hasValidIdToken();
    }
}
