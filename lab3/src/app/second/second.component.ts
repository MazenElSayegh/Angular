import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  imageSrc=["./assets/images/1.jpg","./assets/images/2.jpg","./assets/images/3.jpg","./assets/images/4.jpg","./assets/images/5.png"];
  index:number=0;
  currentImg=this.imageSrc[this.index];
  interval:any=0;
  flag=0;
  next(){
    if(this.index<this.imageSrc.length-1){
      this.index++;
      this.currentImg=this.imageSrc[this.index];
    }
  }
  previous(){
    if(this.index>0){
      this.index--;
      this.currentImg=this.imageSrc[this.index];
    }
  }
  slide(){
    if(this.flag==0){
    this.interval=setInterval(()=>{
      if(this.index<this.imageSrc.length-1){
      this.index++;
      this.currentImg=this.imageSrc[this.index];
    }else{
      this.index=0;
      this.currentImg=this.imageSrc[this.index];
    } this.flag=1;},500);}
  }
  stop(){
    clearInterval(this.interval);
    this.flag=0;
  }
}
