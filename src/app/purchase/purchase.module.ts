import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseComponent } from './purchase.component';
import * as children from './children';

import { purchaseRouting } from './purchase.routing';

@NgModule({
    imports: [CommonModule, purchaseRouting],
    declarations: [PurchaseComponent, children.Child1Component, children.Child2Component]
})
export class PurchaseModule { }
