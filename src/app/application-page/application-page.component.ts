import {Component, Input, OnInit} from '@angular/core';
import {Vacancy} from '../shared/vacancy.model';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit {
  @Input() vacancy: Vacancy;
  constructor() { }

  ngOnInit() {
  }

}
