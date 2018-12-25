import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterSheetRoutingModule } from './character-sheet-routing.module';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { PcDashboardComponent } from './pc-dashboard/pc-dashboard.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { FeatListComponent } from './feat-list/feat-list.component';
import { SpellSheetComponent } from './spell-sheet/spell-sheet.component';
import { GearTrackerComponent } from './gear-tracker/gear-tracker.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterSheetRoutingModule
  ],
  declarations: [
    PcDashboardComponent,
    StatBlockComponent,
    SkillsListComponent,
    FeatListComponent,
    SpellSheetComponent,
    GearTrackerComponent
  ]
})
export class CharacterSheetModule { }
