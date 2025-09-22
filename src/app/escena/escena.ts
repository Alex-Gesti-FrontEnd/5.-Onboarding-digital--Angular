import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../istep';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.html',
  styleUrls: ['./escena.css'],
})
export class Escena {
  @Input() steps: IStep[] = [];
}
