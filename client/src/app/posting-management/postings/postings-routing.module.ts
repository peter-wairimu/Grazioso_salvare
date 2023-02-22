import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDogsComponent } from '../all-dogs/all-dogs.component';
import { DisasterComponent } from '../disaster/disaster.component';
import { MountainComponent } from '../mountain/mountain.component';
import {PostingComponent} from '../posting/posting.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Welcome',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'waterRescue',
      },
      {
        path: 'waterRescue',
        component:PostingComponent,
        data: {
          title: 'waterRescue',
        },
      },
      {
        path: 'mountain',
        component:MountainComponent,
        data: {
          title: 'mountain',
        },
      },
      {
        path: 'disaster',
        component:DisasterComponent,
        data: {
          title: 'disaster',
        },
      },
      {
        path: 'allDogs',
        component:AllDogsComponent,
        data: {
          title: 'allDogs',
        },
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostingsRoutingModule { }
