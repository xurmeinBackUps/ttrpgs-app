import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { SplashComponent } from './splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { CampaignManagerModule } from './campaign-manager/campaign-manager.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CampaignManagerModule,
    CharacterSheetModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DiceTrayComponent,
    SplashComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
