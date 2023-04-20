import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:any;
  user:any;
  constructor(myRoute:ActivatedRoute, public myService: StudentService){
    this.id= myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.id).subscribe(
      {
        next:(data)=>{this.user=data;},
        error:(err)=>{console.log(err);
        }
      }
    )
  }
}
