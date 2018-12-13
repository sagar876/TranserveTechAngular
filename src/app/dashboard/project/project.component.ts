import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SearchPipe} from '../../../assets/Pipe';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  //template:`<app-project-detail [model]="asdasdasd"></app-project-detail>`
})
export class ProjectComponent implements OnInit {
  public data;
  public current_project;
  public selectedProject;
  projectIsActive;
  constructor(private http:HttpClient) {

  }
   
  ngOnInit() {
    //this.data =[{"_id":"5c0d394265db474accc62d59","id":1,"projectname":"\"my\"","formsSubmitted":"\"my\"","total":"\"my\"","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"my\"","count":"\"my\"","__v":0},{"_id":"5c0d47bd99c01929bc0b9679","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\"","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0},{"_id":"5c0d485dabf0434b58de7f8e","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\",asdasdasd","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0},{"_id":"5c0d48c1c685161e101ae936","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\",asdasdasd","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0},{"_id":"5c0d48c1c685161e101ae936","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\",asdasdasd","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0},{"_id":"5c0d48c1c685161e101ae936","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\",asdasdasd","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0},{"_id":"5c0d48c1c685161e101ae936","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\",asdasdasd","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0},{"_id":"5c0d48c1c685161e101ae936","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\",asdasdasd","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0},{"_id":"5c0d48c1c685161e101ae936","projectname":"\"asd\"","formsSubmitted":"asd","total":"\"sda\",asdasdasd","lastupdated":"\"my\"","createdon":"\"my\"","description":"\"test 2","count":"\"my\"","__v":0}]
    this.http.get('http://localhost:1234/products/getprojects').subscribe(data => {
      this.data=data;
    });
  }


  getDetails(id){
    this.http.get('http://localhost:1234/products/'+id).subscribe(data => {
      this.current_project=data;
      this.selectedProject = this.current_project;
      this.projectIsActive = true;
    });
  }

}
