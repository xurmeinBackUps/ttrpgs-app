import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component'

const routes: Routes = [
  { 
    path: 'character-sheet', 
    loadChildren: './character-sheet/character-sheet-routing.module#CharacterSheetModule' 
  },
  { 
    path: 'campaign-manager', 
    loadChildren: './campaign-manager/campaign-manager-routing.module#CampaignManagerModule' 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SplashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
