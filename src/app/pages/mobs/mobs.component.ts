import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TilesService } from '../../shared/tiles/tiles.service';
import { MobsService, IMobs } from './mobs.service';
import { TechService, ITech } from '../tech/tech.service';

@Component({
    selector: 'app-mobs',
    templateUrl: './mobs.component.html',
    styleUrls: ['../jobs/jobs.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class MobsComponent implements OnInit {

    title = "Mobs";
    mobs: IMobs[] = [];
    tech: ITech[] = [];

    techList(job:string) {
            return this.tech.filter((item: any) =>
                item.Class.toLocaleLowerCase().includes(job.toLocaleLowerCase())
            )
    }

    constructor(
        private mobsService: MobsService,
        private techService: TechService,
        public tilesService: TilesService,
    ) {}

    ngOnInit(): void {
        this.mobs = this.mobsService.getMobs();
        this.tech = this.techService.getTech();
    }

}
