import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TrainingComponent } from './training/training.component';
import { TrainingCardComponent } from './trainings/training-card/training-card.component';
import { StoreModule } from '@ngrx/store';
import { TrainingListComponent } from './trainings/training-list/training-list.component';
import { AddTrainingComponent } from './trainings/add-training/add-training.component';
import { EffectsModule } from '@ngrx/effects';
import { AppState } from './app.state';
import { trainingReducer } from './trainings/training.reducer';
import { TrainingEffects } from './trainings/training.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TrainingDetailsComponent } from './trainings/training-details/training-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCardComponent,
    HeaderComponent,
    SidenavComponent,
    TrainingComponent,
    TrainingCardComponent,
    TrainingListComponent,
    AddTrainingComponent,
    TrainingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<AppState>({training: trainingReducer}),
    EffectsModule.forRoot([TrainingEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
