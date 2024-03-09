import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrl: './training-details.component.css',
})
export class TrainingDetailsComponent {
  @Input() toogleDrawer: boolean = false;
}
