import { Component, OnInit } from '@angular/core';
import { dogs,serverurl } from 'src/app/app.constants';
import { Router } from '@angular/router';
import { LoadingService } from '../../common-module/services/loading.service'
import {ToastService} from '../../common-module/services/toast.service'
import {PostService } from  '../services/post.service'
import {Response} from '../interfaces/DogsPostings'

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent  implements OnInit{

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
    this.postingService.getrecords(dogs+'/water-Rescue/', params).subscribe((res) => {
      this.response = res;
      this.loadingService.hideloading();

    });
  }

}
