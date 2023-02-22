import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dogs,serverurl } from 'src/app/app.constants';
import { LoadingService } from 'src/app/common-module/services/loading.service';
import { ToastService } from 'src/app/common-module/services/toast.service';
import { PostService } from '../services/post.service';
import {Response} from '../interfaces/DogsPostings'
@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss']
})
export class MountainComponent implements OnInit{
  response:Response[]=[];
  url:any

  constructor( private router: Router,
    public postingService:PostService, private loadingService: LoadingService, 
    public toastService: ToastService,){
      this.url = serverurl
  }
  ngOnInit() {
   this.fetchRecords()
  }
  fetchRecords() {
    this.loadingService.showloading();
    const params = {

    };
    this.postingService.getrecords(dogs+'/mountain/', params).subscribe((res) => {
      this.response = res;
      this.loadingService.hideloading();

    });
  }

}
