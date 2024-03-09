import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'klms';

  trainingData = [
    {cardTitle: 'Training Attended', subText: '25', color: '#FFFAD9'},
    {cardTitle: 'Completed Training', subText: '27', color: '#F0FFD6'},
    {cardTitle: 'Ongoing Training', subText: '27', color: '#E9E2FF'},
    {cardTitle: 'Certificate Earned', subText: '27', color: '#EEAAAA'},
  ];

  t = true;

}
