import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CommonBannerComponent } from './common-banner/common-banner.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { CardFlipComponent } from './card-flip/card-flip.component';


@NgModule({
  declarations: [
    CommonBannerComponent,
    FormErrorComponent,
    CardFlipComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [CommonBannerComponent , CardFlipComponent]
})
export class SharedModule { }
