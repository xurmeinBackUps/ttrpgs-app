import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcDashboardComponent } from './pc-dashboard/pc-dashboard.component';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { FeatListComponent } from './feat-list/feat-list.component';
import { SpellSheetComponent } from './spell-sheet/spell-sheet.component';
import { GearTrackerComponent } from './gear-tracker/gear-tracker.component';

const pcRoutes: Routes = [
  { path: '', component: PcDashboardComponent },
  { path: 'stat-block', component: StatBlockComponent },
  { path: 'skills-list', component: SkillsListComponent },
  { path: 'feat-list', component: FeatListComponent },
  { path: 'spell-sheet', component: SpellSheetComponent },
  { path: 'gear-tracker', component: GearTrackerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pcRoutes)],
  exports: [RouterModule]
})
export class CharacterSheetRoutingModule { }
