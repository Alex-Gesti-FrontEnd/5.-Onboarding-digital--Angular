import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../istep';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.html',
  styleUrls: ['./escena.scss'],
  animations: [
    trigger('animSlider', [
      transition('* => next', [
        style({ transform: 'translateX(50%)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
      transition('* => prev', [
        style({ transform: 'translateX(-50%)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class Escena implements OnInit {
  @Input() steps: IStep[] = [];

  currentStep: number = 0;
  totalSteps: number = 0;
  direction: 'next' | 'prev' = 'next';

  ngOnInit(): void {
    this.totalSteps = this.steps.length;
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps - 1) {
      this.direction = 'next';
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.direction = 'prev';
      this.currentStep--;
    }
  }
}
