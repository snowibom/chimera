import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="container">
                <div class="grid">
                    <div class="md-25">
                        <a routerLink="/">Home</a>
                    </div>
                    <div class="md-25">
                        <a routerLink="/jobs">Jobs</a>
                    </div>
                    <div class="md-25">
                        <a routerLink="/mobs">Mobs</a>
                    </div>
                    <div class="md-25">
                        <a routerLink="/tech">Tech</a>
                    </div>
                </div>
            </div>
        <div>
    `,
    styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
