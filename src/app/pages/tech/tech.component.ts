import { Component, OnInit } from '@angular/core';
import { TechService, ITech } from '../tech/tech.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.less']
})
export class TechComponent implements OnInit {

  title = "Tech"
  tech: ITech[] = [];

  constructor(
    private techService: TechService
  ) { }

  ngOnInit(): void {
    this.tech = this.techService.getTech();
  }

}
