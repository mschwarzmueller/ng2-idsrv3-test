import { Routes, RouterModule } from '@angular/router';
import { PricingGuardService } from '../services';

import { PricingComponent } from './pricing.component';
import * as children from './children';

const PRICING_ROUTES: Routes = [
    {
        path: '',
        component: PricingComponent,
        canActivate: [PricingGuardService],
        children: [
            { path: '', redirectTo: 'child1', pathMatch: 'full' },
            { path: 'child1', component: children.Child1Component },
            { path: 'child2', component: children.Child2Component }
        ]
    }
];

export const pricingRouting = RouterModule.forChild(PRICING_ROUTES);
