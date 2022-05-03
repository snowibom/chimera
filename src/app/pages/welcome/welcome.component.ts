import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent implements OnInit {

    title = "Chimera";

    constructor() { }

    ngOnInit(): void { }

}
