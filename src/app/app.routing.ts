import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'purchase', loadChildren: './purchase/purchase.module#PurchaseModule' },
    { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
