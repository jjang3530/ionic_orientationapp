import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Route } from '@angular/router';
import { RestService } from '../services/rest.service';
import { NavController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.page.html',
  styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {
  id: any;
  pageData: any;

  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router, public navCtrl: NavController) {
    this.id = this.route.snapshot.paramMap.get('contentId');
  }

  ngOnInit() {
    this.getDetailpage(this.id);
  }

  getDetailpage(id){
    this.restService.getDetail(id).then(data => {
      this.pageData = data;
    });
  }
}
