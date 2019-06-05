import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SerfsLoginPage } from './login/serfs-login.page';

@NgModule({
  declarations: [SerfsLoginPage],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { component: SerfsLoginPage, path: 'login' }
  ])]
})
export class SerfsModule { }
