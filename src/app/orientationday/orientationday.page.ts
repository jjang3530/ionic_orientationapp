import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';


@Component({
  selector: 'app-orientationday',
  templateUrl: './orientationday.page.html',
  styleUrls: ['./orientationday.page.scss'],
})
export class OrientationdayPage {

  pageData: any;
  contentId: any;
  
  constructor(private restService: RestService) {
    this.getData();
   }
  
   getData(){
    this.restService.getContent().then(data => {
      this.pageData = data;
      this.pageData = this.pageData.filter(c => c.section === "Orientation Day")
      console.log(this.pageData);
    });
  }
}