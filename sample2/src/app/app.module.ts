import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import {DemoMaterialModule} from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tale1Component ,DialogOverviewExampleDialog} from './tale1/tale1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table2Component } from './table2/table2.component';

@NgModule({
  declarations: [
    AppComponent,
    Tale1Component,
    Table2Component,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
