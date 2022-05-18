import { Component, OnInit } from '@angular/core';
import { ITech, TechService} from '../tech/tech.service';
import { FilterService } from 'src/app/shared/filter.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.less']
})
export class TechComponent implements OnInit {

  title = "Tech"
  tech: ITech[] =[];
  filteredTech: ITech[] = [];

  constructor(
    private techService: TechService,
    private filterService: FilterService
  ) { }

searchFilter(e:any){
  this.filteredTech = this.filterService.filterByName(e);
}

  ngOnInit(): void {
    this.tech = this.techService.getTech();
    this.filteredTech = this.tech;
    this.filterService.tech = this.tech;
    this.filterService.filteredTech = this.filteredTech;
  }
}
