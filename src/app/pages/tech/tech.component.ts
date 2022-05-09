import { Component, OnInit } from '@angular/core';
import { TechService, ITech } from '../tech/tech.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.less']
})
export class TechComponent implements OnInit {

  title = "Tech"
  techFilter: any[] = [];
  nameFilter: string = "";
  tech: ITech[] = [];
  filteredTech: ITech[] = [];
  class: classCheckbox = [];

  constructor(
    private techService: TechService
  ) { }


  filterClass()
  {
    let filteredClasses: classCheckbox = [];
    filteredClasses = this.class.filter(x => x.isSelected == true)
    this.filteredTech = this.tech;
    if(filteredClasses.length > 0)
    {
      this.filteredTech = [];
      filteredClasses.forEach(t => {
        this.tech.filter(x => x.Class == t.name).forEach(filterTech => {
          this.filteredTech.push(filterTech);
        });
      });
    }
    this.filteredTech.sort((a,b)=>a.Class.localeCompare(b.Class));
  }

  filterByName(e :any)
  {
    this.filteredTech = this.tech;
    if(e.target.value.trim())
    {
      this.filteredTech = this.filteredTech.filter(x => x.Name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    }
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
