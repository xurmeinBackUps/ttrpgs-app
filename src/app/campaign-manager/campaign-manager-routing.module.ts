import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GmScreenComponent } from './gm-screen/gm-screen.component';
import { CombatTrackerComponent } from './combat-tracker/combat-tracker.component';
import { EncounterBuilderComponent } from './encounter-builder/encounter-builder.component';
import { SessionPlannerComponent } from './session-planner/session-planner.component';

const gmRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'gm-screen', component: GmScreenComponent },
  { path: 'session-planner', component: SessionPlannerComponent },
  { path: 'encounter-builder', component: EncounterBuilderComponent },
  { path: 'combat-tracker', component: CombatTrackerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(gmRoutes)],
  exports: [RouterModule]
})
export class CampaignManagerRoutingModule { }
