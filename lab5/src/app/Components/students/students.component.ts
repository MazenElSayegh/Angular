import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  users:any;
  constructor(myService:StudentService){
    console.log(myService.GetAllUsers().subscribe());
    myService.GetAllUsers().subscribe(
      {
        next: (data)=>{
          this.users=data;
        },
        error: (err)=>{console.log(err);
        }
      });

  }
}
