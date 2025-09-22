import { Component, OnInit } from '@angular/core';
import { Escena } from '../escena/escena';
import { IStep } from '../istep';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Escena],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  steps: IStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}
