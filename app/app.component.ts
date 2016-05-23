import { Component } from 'angular2/core';
import {WelcomeComponent} from './home/welcome.component'

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>First Component</div>
    </div>
    <welcome></welcome>
    `,
    directives: [WelcomeComponent]
})

export class AppComponent {
    pageTitle: string = 'Acme product Managment';
}