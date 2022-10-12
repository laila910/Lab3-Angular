import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() myEvent = new EventEmitter();
  name=""
  age=0 
 
  AddNewStudent(){
    if((this.age>=20 && this.age<=40 )&& this.name.length >=3){
      var NewStudent:{name:string, age:number} = {name: this.name, age: this.age};
      this.myEvent.emit(NewStudent);
    
    }
   }
  
}
