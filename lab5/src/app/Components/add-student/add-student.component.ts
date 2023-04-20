import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(private myService: StudentService, private router: Router) {}
  validate = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  Add(name: any, age: any, email: any, country: any, city: any, phone: any) {
    // console.log("5ara");
    console.log(this.validate);

    if (this.validate.valid) {
      console.log('5ara');
      let newStudent = { name, age, email, country, city, phone };
      if (newStudent.name && newStudent.age && newStudent.email) {
        this.myService.AddNewStudent(newStudent).subscribe();
      }
      this.router.navigateByUrl('/');
    }
  }
}
