import { Component } from '@angular/core';

@Component({
    selector: 'app-purchase-child1',
    template: require('./child1.component.html'),
    styles: [require('./child1.component.scss')]
})

export class Child1Component {
    text: string = 'Purchase Child #1';
}
