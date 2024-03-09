import { createAction, props } from "@ngrx/store";
import { Training } from "../models/training";

export const AddTraining = createAction('[Training] Add Training', props<Training>());
export const AddTrainingSuccess = createAction('[Training] Add Training Successful', props<Training>());
export const AddTrainingFailure = createAction('[Training] Add Training Failed', props<{error: any}>());