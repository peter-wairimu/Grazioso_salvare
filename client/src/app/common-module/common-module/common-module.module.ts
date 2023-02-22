import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonLoaderComponent } from '../../containers/common-loader/common-loader.component';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  SpinnerModule ,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD HH:mm:ss',
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  datePickerInput: 'YYYY-MM-DD HH:mm:ss',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
  };

@NgModule({
  declarations: [CommonLoaderComponent],
  imports: [
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    NgxSpinnerModule,
    PerfectScrollbarModule,
    CommonModule,
    UtilitiesModule,
    SpinnerModule ,
    TabsModule, 
    FormsModule,
    ReactiveFormsModule,
    // DynamicNestedFormModule,
  ],
  exports: [
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    PerfectScrollbarModule,
    FormModule,
    CommonLoaderComponent,
    GridModule,
    SpinnerModule ,
    HeaderModule, 
    ListGroupModule,
    NavModule,
    ProgressModule,
    NgxSpinnerModule,
    SharedModule,
    SidebarModule,
    CommonModule,
    UtilitiesModule,
    CommonModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe
    ]

})
export class SharedModulee { }