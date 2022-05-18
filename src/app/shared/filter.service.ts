import { Injectable } from "@angular/core";
import { ITech } from '../pages/tech/tech.service';

export type classCheckbox = Array<{ name: string; isSelected: boolean }>;
@Injectable({
    providedIn: 'root'
})

export class FilterService {
    filteredTech: ITech[] = [];
    class: classCheckbox = [];
    tech: ITech[] = [];

    filterByName(e: any): ITech[] {
        this.getClassCheckBoxes();
        if (e.target.value.trim()) {
            this.filteredTech = this.filteredTech.filter(x => x.Name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
        }
        return this.filteredTech;
    }

    getClassCheckBoxes(): ITech[] {
        let filteredClasses: classCheckbox = [];
        filteredClasses = this.class.filter(x => x.isSelected)
        this.filteredTech = this.tech;

        if (filteredClasses.length > 0) {
            this.filteredTech = [];
            filteredClasses.forEach(t => {
                this.tech.filter(x => x.Class == t.name).forEach(filterTech => {
                    this.filteredTech.push(filterTech);
                });
            });
        }
        return this.filteredTech;
    }
}