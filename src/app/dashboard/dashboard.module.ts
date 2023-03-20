import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
