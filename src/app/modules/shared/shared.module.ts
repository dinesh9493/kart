import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { BadgeModule } from 'primeng/badge';
import { TableModule }from 'primeng/table';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { MmDdYyyyDirective } from './directives/mm-dd-yyyy.directive';


@NgModule({
  declarations: [
    MmDdYyyyDirective
  ],
  imports: [
    CommonModule,
    MenubarModule,
    PanelModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    TableModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    MenubarModule,
    PanelModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    TableModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MmDdYyyyDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ]
})
export class SharedModule { }
