import { Component } from '@angular/core';

@Component({
    selector: 'app-pricing-child1',
    template: require('./child1.component.html'),
    styles: [require('./child1.component.scss')]
})

export class Child1Component {
    text: string = 'Pricing Child #1';
}
