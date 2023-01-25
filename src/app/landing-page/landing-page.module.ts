import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';
import { LandingPagePresentationComponent } from './landing-page-container/landing-page-presentation/landing-page-presentation.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageContainerComponent,
    LandingPagePresentationComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
