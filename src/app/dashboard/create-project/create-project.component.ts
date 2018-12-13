import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  public projectData;
  pname:string;
  pdesc:string;
  form:string;
  user:string;
  symbol:string;
  formval:any;
  forms=[{id:1,name:'Form XYZ',shape:'Point',updateddate:'Jun 04',createdon:'May 29, 2018',},{id:2,name:'Form MNO',shape:'Point',updateddate:'Jun 02',createdon:'May 29, 2018',},{id:3,name:'Form XYW',shape:'Polygon',updateddate:'Jun 05',createdon:'May 29, 2018',},{id:4,name:'Form PQR',shape:'Polygon',updateddate:'Jun 12',createdon:'May 29, 2018',},{id:5,name:'Form ABC',shape:'Polygon',updateddate:'Jun 11',createdon:'May 29, 2018',},{id:6,name:'Form QWERTY',shape:'Polygon',updateddate:'Jun 04',createdon:'May 29, 2018',}];
  constructor(private http:HttpClient,private location:Location) { }

  ngOnInit() {
      console.log(this.forms);
  }
  getForm(form){
    this.form = form.value;
  }
  getUser(user){
    this.user= user.value;
  }
  getSymbol(symbol){
    this.symbol= symbol.value;
  }
  cancelAction(){
    this.location.back();
  }
  createProject() {

    const name = this.pname;
    const desc = this.pdesc
    const form = this.form ;
    const user = this.user;
    const symbol = this.symbol;
    
    let formdata={
      "projectname":name,
      "formsSubmitted":form,
      "total":"dummy entry",
      "lastupdated":"dummy entry",
      "createdon":"dummy entry",
      "description":desc,
      "count":"dummy entry"
    }
    console.log(formdata);
    let body = JSON.stringify(formdata);
    console.log(body);
    return this.http.post('http://localhost:1234/products/create', formdata).subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      }
  ); 
  }

}
