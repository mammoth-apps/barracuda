import { Component } from '@angular/core';

interface ICardDetails {
  title: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
})
export class LaunchPageComponent {
  constructor() {}
}
