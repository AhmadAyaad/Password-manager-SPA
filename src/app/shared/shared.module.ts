import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';


import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserModule,
    TableModule
  ],
  providers: [MessageService]

})
export class SharedModule { }
