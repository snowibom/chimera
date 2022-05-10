import { Component, OnInit } from '@angular/core';
import { ITech, TechService} from '../tech/tech.service';
import { FilterService, classCheckbox } from 'src/app/shared/filter.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.less']
})
export class TechComponent implements OnInit {

  title = "Tech"
  tech: ITech[] =[];
  filteredTech: ITech[] = [];
  class: classCheckbox = [];

  constructor(
    private techService: TechService,
    private filterService: FilterService
  ) { }

checkboxFilter(){
  this.filteredTech = this.filterService.getClassCheckBoxes()
}

searchFilter(e:any){
  this.filteredTech = this.filterService.filterByName(e);
}

  ngOnInit(): void {
    this.tech = this.techService.getTech();
    this.filteredTech = this.tech;
    this.tech.forEach(x => {
      if(!this.class.some(s => s.name == x.Class))
      {
        this.class.push({name: x.Class, isSelected:false});
      }
    });

    this.filterService.class = this.class;
    this.filterService.tech = this.tech;
    this.filterService.filteredTech = this.filteredTech;
  }
}
