import { Component } from 'angular2/core';

@Component({
    selector: 'welcome',
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
}