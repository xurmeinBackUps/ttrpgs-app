import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignManagerRoutingModule } from './campaign-manager-routing.module';
import { GmScreenComponent } from './gm-screen/gm-screen.component';
import { EncounterBuilderComponent } from './encounter-builder/encounter-builder.component';
import { CombatTrackerComponent } from './combat-tracker/combat-tracker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionPlannerComponent } from './session-planner/session-planner.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    GmScreenComponent, 
    EncounterBuilderComponent, 
    SessionPlannerComponent,
    CombatTrackerComponent
  ], 
  imports: [
    CommonModule,
    CampaignManagerRoutingModule
  ]
})
export class CampaignManagerModule { }
