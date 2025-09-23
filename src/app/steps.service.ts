import { Injectable } from '@angular/core';
import { IStep } from './istep';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor() {}

  getSteps(): IStep[] {
    return [
      {
        title: 'Dedica moltes hores',
        descripcion:
          'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
        src: '../../../public/time_management.svg',
        bgcolor: '#009479ff',
      },
      {
        title: 'Programa projectes propis',
        descripcion:
          'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
        src: '../../../public/programming.svg',
        bgcolor: '#8a8a8aff',
      },
      {
        title: 'Procura descansar',
        descripcion:
          "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
        src: '../../../public/meditation.svg',
        bgcolor: '#ffee00ff',
      },
    ];
  }
}
