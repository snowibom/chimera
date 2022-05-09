import { Component, OnInit } from '@angular/core';
import { TechService, ITech, ITechCheckBox } from '../tech/tech.service';

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
  techCheckBox: ITechCheckBox[] = [];

  constructor(
    private techService: TechService
  ) { }

  filter(e :any)
  {
    this.getClassCheckBoxes();
    if(e.target.value.trim())
    {
      let filteredPropList: ITechCheckBox[] =[];
      filteredPropList = this.techCheckBox.filter(t => t.isSelected)
      if(filteredPropList.length > 0)
      {
        filteredPropList.forEach(prop => {
          let finalFilter: ITech[] =[];
          finalFilter = this.filteredTech.filter(x => x.Name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
          finalFilter.forEach(final => {
            this.filteredTech.push(final);
          });
        });
      }
      else
      {
        this.filteredTech = this.filteredTech.filter(x => x.Name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      }
    }
  }

  getClassCheckBoxes()
  {
    let filteredClasses: classCheckbox = [];
    filteredClasses = this.class.filter(x => x.isSelected)
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

  ngOnInit(): void {
    this.tech = this.techService.getTech();
    this.filteredTech = this.tech;
    this.tech.forEach(x => {
      if(!this.class.some(s => s.name == x.Class))
      {
        this.class.push({name: x.Class, isSelected:false});
      }
    });
    Object.keys(this.tech).forEach(prop => {
        this.techCheckBox.push({name: prop.toLocaleLowerCase(), isSelected: false});
    });
  }
}
type classCheckbox = Array<{name: string; isSelected: boolean}>;
