import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AuthFormComponent} from '../components/auth-form/auth-form.component';



@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [AuthFormComponent],
  entryComponents: [AuthFormComponent]
})
export class AuthModule { }
