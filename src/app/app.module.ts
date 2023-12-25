import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { courseReducer } from "../app/reducers/cource.reducer"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot({
      course: courseReducer,
    } as ActionReducerMap<any, any>),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
