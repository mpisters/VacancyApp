import {Component} from '@angular/core';
import {Vacancy} from './shared/vacancy.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VacancyApp';
  exampleVacancy = new Vacancy(1,
    'Junior Front-end Developer',
    'Amazon',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, diam ' +
    'sed molestie convallis, nisi lectus cursus nibh, non maximus leo ' +
    'felis et tellus. Aenean eu porta felis. Proin convallis neque eu elementum tempus.' +
    ' Sed a ultricies nisl. Vestibulum justo massa, interdum nec feugiat a, volutpat ac' +
    ' enim. Suspendisse potenti. Vivamus sodales sagittis magna sed sodales. Morbi auctor' +
    ' ligula urna, in auctor nunc semper sit amet. Suspendisse posuere cursus dolor a volutpat.' +
    ' Phasellus convallis venenatis est, sit amet venenatis purus fermentum sit amet. Duis fringilla' +
    ' mauris quis tortor hendrerit semper. Integer eu odio quis tellus convallis faucibus. Donec ' +
    'lacinia bibendum.',
    ['JavaScript', 'Agile/Scrum', 'ES6'],
    ['3500 pm', 'pension', 'amazing lunch']
  );
}
