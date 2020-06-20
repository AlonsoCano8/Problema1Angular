import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludarComponent } from './componentes/saludar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './componentes/form/form.component';
import { AddAppComponent } from './componentes/add-app/add-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    FormComponent,
    AddAppComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
