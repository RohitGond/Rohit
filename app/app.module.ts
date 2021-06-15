import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsernameComponent } from './username/username.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { BaseComponent } from './base/base.component';
import { from } from 'rxjs';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { ImageComponent } from './image/image.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,

    UsernameComponent,
     BaseComponent,
     FormPanelComponent,
     ImageComponent,
     TextFieldComponent,
     PasswordFieldComponent,
     TitleComponent,
     ButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule  ,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
