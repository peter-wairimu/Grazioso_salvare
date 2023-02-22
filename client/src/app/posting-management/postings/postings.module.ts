import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SharedModulee} from '../../common-module/common-module/common-module.module'
import { PostingsRoutingModule } from './postings-routing.module';
import {PostingComponent} from '../posting/posting.component'
import { MountainComponent } from '../mountain/mountain.component';
import { DisasterComponent } from '../disaster/disaster.component';
import { AllDogsComponent } from '../all-dogs/all-dogs.component';

@NgModule({
  declarations: [PostingComponent,MountainComponent, DisasterComponent, AllDogsComponent ],
  imports: [
    CommonModule,
    PostingsRoutingModule,
    SharedModulee
  ]
})
export class PostingsModule { }
