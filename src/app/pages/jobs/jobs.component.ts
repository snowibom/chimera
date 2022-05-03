import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TilesService } from '../../shared/tiles/tiles.service';
import { JobsService, IJobs } from './jobs.service';
import { TechService, ITech } from '../tech/tech.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class JobsComponent implements OnInit {

    title = "Jobs";
    jobs: IJobs[] = [];
    tech: ITech[] = [];

    techList(job:string) {
        return this.tech.filter((item: any) =>
            item.Class.toLocaleLowerCase().includes(job.toLocaleLowerCase())
        )
    }

    constructor(
        private jobsService: JobsService,
        private techService: TechService,
        public tilesService: TilesService,
    ) {}

    matchClass(tec: any): any {
        return tec.Class == "Courier";
    }

    ngOnInit(): void {
        this.jobs = this.jobsService.getJobs();
        this.tech = this.techService.getTech();
    }

}
