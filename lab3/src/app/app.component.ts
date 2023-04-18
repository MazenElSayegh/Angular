import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  students: { name: string; age: string }[] = [];
  getData(data:any){
    this.students.push(data);
  }

}
