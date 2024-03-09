import { createReducer, on } from '@ngrx/store';
import { Training } from '../models/training';
import {
  AddTraining,
  AddTrainingFailure,
  AddTrainingSuccess,
} from './training.actions';
import { Utility } from '../helpers/utilities';

const utility = new Utility();

export const initialState: Training[] = [
  {
    id: '123',
    trainingTitle: 'UI/UX Design Training',
    trainingType: 'online',
    trainingCategory: 'UI/UX',
    mentorName: 'John',
    trainingDate: utility.getCurrentDate(),
    trainingDesc:
      'Amet minim mollit non deserunt ullamco estsit ok aliqua dolor do amet sint velit officia cons equat duis enim velit mollit.',
  },
];

export const trainingReducer = createReducer(
  initialState,
  on(AddTraining, (state) => {
    return state;
  }),
  on(
    AddTrainingSuccess,
    (
      state,
      {
        id,
        trainingTitle,
        trainingType,
        trainingCategory,
        mentorName,
        trainingDate,
        trainingDesc,
      }
    ) => [
      ...state,
      {
        id,
        trainingTitle,
        trainingType,
        trainingCategory,
        mentorName,
        trainingDate,
        trainingDesc,
      },
    ]
  ),
  on(AddTrainingFailure, (state, { error }) => {
    console.error(error);
    return state;
  })
);
