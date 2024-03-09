import { Component } from '@angular/core';
import { Training } from '../../models/training';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrl: './training-list.component.css',
})
export class TrainingListComponent {
  items: number[] = Array.from({ length: 10 }, (_, index) => index + 1);

  trainings$: Observable<Training[]>;

  toogle: boolean = true;

  constructor(private store: Store<AppState>) {
    this.trainings$ = store.pipe(select('training'));
  }
}
