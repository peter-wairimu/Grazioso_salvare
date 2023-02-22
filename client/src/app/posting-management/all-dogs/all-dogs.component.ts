import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dogs, allDogs } from 'src/app/app.constants';
import { LoadingService } from 'src/app/common-module/services/loading.service';
import { ToastService } from 'src/app/common-module/services/toast.service';
import { PostService } from '../services/post.service';
import {Response} from '../interfaces/DogsPostings'
@Component({
  selector: 'app-all-dogs',
  templateUrl: './all-dogs.component.html',
  styleUrls: ['./all-dogs.component.scss']
})
export class AllDogsComponent implements OnInit{
  response:Response[]=[];
  constructor( private router: Router,
    public postingService:PostService, private loadingService: LoadingService, 
    public toastService: ToastService,){

  }

  ngOnInit() {
   this.fetchRecords();
  }
  fetchRecords() {
    this.loadingService.showloading();
    const params = {

    };
    this.postingService.getrecords( allDogs, params).subscribe((res) => {
      this.response = res;

      this.loadingService.hideloading();

    });
  }

}
