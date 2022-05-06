import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-nav',
    template: `
        <div class="centered">
            <h1 *ngIf="pageTitle == 'Chimera'">👹 <span class="shadow">CHIMERA</span></h1>
            <a  *ngIf="pageTitle != 'Chimera'" routerLink="/" class="home" aria-label="chimera">👹</a>
        </div>
        <div class="container">
            <nav class="nav-list">
                <a routerLink="/jobs" class="nav-item" [ngClass]="{'active': pageTitle == 'Jobs'}">Jobs</a>
                <a routerLink="/mobs" class="nav-item" [ngClass]="{'active': pageTitle == 'Mobs'}">Mobs</a>
                <a routerLink="/tech" class="nav-item" [ngClass]="{'active': pageTitle == 'Tech'}">Tech</a>
            </nav>
        </div>
    `,
    styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent implements OnInit {

        @Input() pageTitle = '';
        
        constructor() { }

        ngOnInit(): void {
    }

}
