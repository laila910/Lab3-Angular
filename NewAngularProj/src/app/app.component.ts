import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewAngularProj';

  AllStudents: {name:string, age:number}[] = [];

  GetData(data:any){
    //  this.DataFromReg = data; 
     this.AllStudents.push(data);
     console.log(this.AllStudents);
  }
}
