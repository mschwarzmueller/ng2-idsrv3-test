import { Component } from '@angular/core';

@Component({
    selector: 'app-purchase-child2',
    template: require('./child2.component.html'),
    styles: [require('./child2.component.scss')]
})

export class Child2Component {
    text: string = 'Purchase Child #2';
}
