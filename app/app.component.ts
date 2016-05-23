import { Component } from 'angular2/core';
import {WelcomeComponent} from './home/welcome.component'
import {SimpleObj} from './simple-obj/simple-obj.component'

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>First Component</div>
        <h2>{{simpleObj.username}}</h2>
    </div>
    <welcome></welcome>
    `,
    directives: [WelcomeComponent]
})

export class AppComponent {
    pageTitle: string = 'Acme product Managment';
    simpleObj: SimpleObj;
    constructor(){
        this.simpleObj = new SimpleObj('TestUser', '1234431', 20)
    }
}