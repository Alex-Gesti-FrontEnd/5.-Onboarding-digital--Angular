export const mockSteps = [
  { title: 'Paso 1', descripcion: 'Desc 1', url: 'img1.jpg', bgcolor: '#ff0000' },
  { title: 'Paso 2', descripcion: 'Desc 2', url: 'img2.jpg', bgcolor: '#00ff00' },
  { title: 'Paso 3', descripcion: 'Desc 3', url: 'img3.jpg', bgcolor: '#0000ff' },
];

export class Escena {
  constructor(steps = []) {
    this.steps = steps;
    this.currentStep = 0;
    this.totalSteps = steps.length;
    this.direction = 'next';
  }

  nextStep() {
    if (this.currentStep < this.totalSteps - 1) {
      this.direction = 'next';
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.direction = 'prev';
      this.currentStep--;
    }
  }

  getCurrentImage() {
    return this.steps[this.currentStep]?.url || null;
  }

  getActiveIndicator() {
    return this.currentStep;
  }
}
