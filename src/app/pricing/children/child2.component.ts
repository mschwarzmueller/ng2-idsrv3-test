import { Component } from '@angular/core';

@Component({
    selector: 'app-pricing-child2',
    template: require('./child2.component.html'),
    styles: [require('./child2.component.scss')]
})

export class Child2Component {
    text: string = 'Pricing Child #2';
}
