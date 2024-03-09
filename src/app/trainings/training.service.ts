import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor() {}

  addTraining(training: Training): Observable<Training> {
    return of(training);
  }
}
