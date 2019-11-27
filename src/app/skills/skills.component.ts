import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skill: Skill = {
    id: 1,
    name: 'JavaScript'
  };

  constructor() { }

  ngOnInit() {
  }

}
