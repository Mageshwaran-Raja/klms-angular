import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../../models/training';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddTraining } from '../training.actions';
import { Router } from '@angular/router';
import { Utility } from '../../helpers/utilities';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.css',
})
export class AddTrainingComponent {
  trainings$: Observable<Training[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.trainings$ = store.pipe(select('training'));
  }

  addTraining(
    trainingTitle: string,
    trainingType: string,
    trainingCategory: string,
    mentorName: string,
    trainingDate: Date,
    trainingDesc: string
  ) {
    let id = Date.now().toString();
    const utility = new Utility();
    let convertedDate = utility.convertDate(trainingDate);
    this.store.dispatch(
      AddTraining({
        id,
        trainingTitle,
        trainingType,
        trainingCategory,
        mentorName,
        trainingDate: convertedDate,
        trainingDesc,
      })
    );
    this.router.navigate(['trainings']);
  }
}
