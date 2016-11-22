import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingComponent } from './pricing.component';
import * as children from './children';

import { pricingRouting } from './pricing.routing';

import { PricingGuardService } from '../services';

@NgModule({
    imports: [CommonModule, pricingRouting],
    declarations: [PricingComponent, children.Child1Component, children.Child2Component],
    providers: [PricingGuardService]
})
export class PricingModule { }
