import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { TechService, ITech } from '../tech/tech.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.less']
})
export class TechComponent implements OnInit {

  title = "Tech"
  techFilter: any[] = [];
  tech: ITech[] = [];
  filteredTech: ITech[] = [];
  class: classCheckbox = [];

  constructor(
    private techService: TechService
  ) { }


  performFilter()
  {
    let filteredClasses: classCheckbox = [];
    filteredClasses = this.class.filter(x => x.isSelected == true)

    if(filteredClasses.length > 0)
    {
      this.filteredTech = [];
      filteredClasses.forEach(t => {
        this.tech.filter(x => x.Class == t.name).forEach(filterTech => {
          this.filteredTech.push(filterTech);
        });
      });
    }
    else
    {
      this.filteredTech = this.tech;
    }
    this.filteredTech.sort((a,b)=>a.Class.localeCompare(b.Class));
  }

  ngOnInit(): void {
    this.tech = this.techService.getTech();
    this.filteredTech = this.tech;
    this.tech.forEach(x => {
      if(!this.class.some(s => s.name == x.Class))
      {
        this.class.push({name: x.Class, isSelected:false})
      }
    });
  }
}
type classCheckbox = Array<{name: string; isSelected: boolean}>;
