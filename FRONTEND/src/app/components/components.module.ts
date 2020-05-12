import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PiepagComponent } from './piepag/piepag.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PiepagComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PiepagComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
