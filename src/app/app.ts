import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('5.-Onboarding-digital--Angular-');
}
