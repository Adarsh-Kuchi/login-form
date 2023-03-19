import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CommonBannerComponent } from './common-banner/common-banner.component';
import { FormErrorComponent } from './form-error/form-error.component';


@NgModule({
  declarations: [
    CommonBannerComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [CommonBannerComponent]
})
export class SharedModule { }
