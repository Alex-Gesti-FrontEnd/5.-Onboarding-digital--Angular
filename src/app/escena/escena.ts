import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../istep';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.html',
  styleUrls: ['./escena.scss'],
})
export class Escena implements OnInit {
  @Input() steps: IStep[] = [];

  currentStep: number = 0;
  totalSteps: number = 0;

  ngOnInit(): void {
    this.totalSteps = this.steps.length;
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps - 1) this.currentStep++;
  }

  prevStep(): void {
    if (this.currentStep > 0) this.currentStep--;
  }
}
