import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  validate= new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    age:new FormControl("",[Validators.required,Validators.min(20),Validators.max(40)]),
    email:new FormControl("",[Validators.required,Validators.email])
  })

  get AgeValid(){
    return this.validate.controls["age"].valid;
  }
  get NameValid(){
    return this.validate.controls["name"].valid;
  }
  get EmailValid(){
    return this.validate.controls["email"].valid;
  }
  get FormValid(){
    return this.validate.valid;
  }

  add(){
    if(this.validate.valid){
      alert("Registration Successful!");
    }

  }
}
