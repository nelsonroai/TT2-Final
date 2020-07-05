import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListainiciativasPage } from './listainiciativas.page';

const routes: Routes = [
  {
    path: '',
    component: ListainiciativasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListainiciativasPage]
})
export class ListainiciativasPageModule {}
