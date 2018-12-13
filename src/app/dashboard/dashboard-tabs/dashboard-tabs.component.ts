import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  styleUrls: ['./dashboard-tabs.component.css']
})
export class DashboardTabsComponent implements OnInit {
  public data;
  constructor(private http:HttpClient) { }
  forms=[{id:1,name:'Form XYZ',shape:'Point',updateddate:'Jun 04',createdon:'May 29, 2018',},{id:2,name:'Form MNO',shape:'Point',updateddate:'Jun 02',createdon:'May 29, 2018',},{id:3,name:'Form XYW',shape:'Polygon',updateddate:'Jun 05',createdon:'May 29, 2018',},{id:4,name:'Form PQR',shape:'Polygon',updateddate:'Jun 12',createdon:'May 29, 2018',},{id:5,name:'Form ABC',shape:'Polygon',updateddate:'Jun 11',createdon:'May 29, 2018',},{id:6,name:'Form QWERTY',shape:'Polygon',updateddate:'Jun 04',createdon:'May 29, 2018',}];

  ngOnInit() {
    //this.data=[{id:1,name:'Form XYZ',shape:'Point',updateddate:'Jun 04',createdon:'May 29, 2018',},{id:2,name:'Form MNO',shape:'Point',updateddate:'Jun 02',createdon:'May 29, 2018',},{id:3,name:'Form XYW',shape:'Polygon',updateddate:'Jun 05',createdon:'May 29, 2018',},{id:4,name:'Form PQR',shape:'Polygon',updateddate:'Jun 12',createdon:'May 29, 2018',},{id:5,name:'Form ABC',shape:'Polygon',updateddate:'Jun 11',createdon:'May 29, 2018',},{id:6,name:'Form QWERTY',shape:'Polygon',updateddate:'Jun 04',createdon:'May 29, 2018',},];
    this.http.get('http://localhost:1234/products/getforms').subscribe(data => {
        this.data=data;
    });
  }
  
}
