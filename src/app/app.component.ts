import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Surveys forms', url: '/form', icon: 'help-circle' },
    { title: 'Take a picture', url: '/picture', icon: 'camera' },
    { title: 'bible', url: '/bible', icon: 'book' },
    { title: 'identification', url: '/identification', icon: 'person' },
    
  ];
  
  constructor() {}
}
