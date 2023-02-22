import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner"; 
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private SpinnerService: NgxSpinnerService) { }
  showloading(){
     this.SpinnerService.show(undefined, {
      type: 'ball-scale-multiple',
      size: "medium",
      bdColor: "rgba(243,241,241,0.61)",
      fullScreen: false,
      color: "black"
      });

  }
  hideloading(){
    this.SpinnerService.hide();
  }
}