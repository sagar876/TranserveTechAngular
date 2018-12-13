import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
@Input() model:any;
  public data;
  constructor() { }

  ngOnInit() {

  }

}
