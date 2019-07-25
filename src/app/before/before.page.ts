import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-before',
  templateUrl: './before.page.html',
  styleUrls: ['./before.page.scss'],
})
export class BeforePage {
  pageData: any;
  contentId: any;

  constructor(private restService: RestService) {
    this.getData();
   }

   getData(){
    this.restService.getContent().then(data => {
      this.pageData = data;
      this.pageData = this.pageData.filter(c => c.section === "Before")
      console.log(this.pageData);
    });
  }
}
