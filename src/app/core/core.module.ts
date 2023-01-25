import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './navigations/header/header.component';
import { FooterComponent } from './navigations/footer/footer.component';



@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
