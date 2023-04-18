import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // data={ name:"", age:"" };
  name="";
  age="";
  @Output() myEvent= new EventEmitter();

  add(){
    if(+this.age>20 && +this.age<40 && this.name.length>3)
      this.myEvent.emit({name:this.name,age:this.age});
  }
}
