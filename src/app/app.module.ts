import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@NgModule({
  // this is where we bring in pipe, directives and components.
  declarations: [AppComponent, ReactiveFormsComponent],
  // imports are where we bring in other modules to run in this app
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],

  //this is what tells angular where the starting point of the propject is.
  bootstrap: [AppComponent]
})
export class AppModule {}
