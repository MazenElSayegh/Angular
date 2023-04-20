import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private myClient:HttpClient) { }
  private Base_URL = "http://localhost:3000/students";

  public user:any;
  GetAllUsers(){
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddNewStudent(newUser:any){
    return this.myClient.post(this.Base_URL, newUser);
  }
}
