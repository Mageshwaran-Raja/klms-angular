import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingListComponent } from './trainings/training-list/training-list.component';
import { AddTrainingComponent } from './trainings/add-training/add-training.component';
import { TrainingDetailsComponent } from './trainings/training-details/training-details.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingListComponent },
  { path: 'add-training', component: AddTrainingComponent },
  { path: 'training-details', component: TrainingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
