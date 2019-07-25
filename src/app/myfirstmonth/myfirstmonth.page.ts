import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-myfirstmonth',
  templateUrl: './myfirstmonth.page.html',
  styleUrls: ['./myfirstmonth.page.scss'],
})
export class MyfirstmonthPage {
  pageData: any;
  contentId: any;
  
  constructor(private restService: RestService) {
    this.getData();
   }
  
   getData(){
    this.restService.getContent().then(data => {
      this.pageData = data;
      this.pageData = this.pageData.filter(c => c.section === "My First Month")
      console.log(this.pageData);
    });
  }
}