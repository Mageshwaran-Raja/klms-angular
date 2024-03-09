import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as trainingActions from '../trainings/training.actions';
import { TrainingService } from './training.service';

@Injectable()
export class TrainingEffects {
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trainingActions.AddTraining),
      mergeMap((action) =>
        this.trainingService.addTraining(action).pipe(
          map((training) => trainingActions.AddTrainingSuccess(training)),
          catchError((error) =>
            of(trainingActions.AddTrainingFailure({ error }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private trainingService: TrainingService
  ) {}
}
