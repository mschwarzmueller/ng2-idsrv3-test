import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as Services from './services';
import { OAuthService } from 'angular2-oauth2/oauth-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { Routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Routing
    ],
    providers: [
        Services.SecurityService,
        OAuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
