import { Component, Input } from '@angular/core';
import { Training } from '../../models/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.css'
})
export class TrainingCardComponent {
  @Input() data: Training = {
    id: '',
    trainingTitle: '',
    trainingType: '',
    trainingCategory: '',
    trainingDate: '',
    trainingDesc: '',
    mentorName: ''
  };
}
