import { Routes, RouterModule } from '@angular/router';

import { PurchaseComponent } from './purchase.component';
import * as children from './children';

const PURCHASE_ROUTES: Routes = [
    {
        path: '', component: PurchaseComponent, children: [
            { path: '', redirectTo: 'child1', pathMatch: 'full' },
            { path: 'child1', component: children.Child1Component },
            { path: 'child2', component: children.Child2Component }
        ]
    }
];

export const purchaseRouting = RouterModule.forChild(PURCHASE_ROUTES);
