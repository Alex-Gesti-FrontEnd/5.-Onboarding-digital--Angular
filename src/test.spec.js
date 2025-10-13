import { Escena, mockSteps } from './test';

describe('Escena component (lógica)', () => {
  let escena;

  beforeEach(() => {
    escena = new Escena(mockSteps);
  });

  test('debería iniciarse en el paso 0', () => {
    expect(escena.currentStep).toBe(0);
  });

  test('debería devolver la primera imagen al iniciar', () => {
    expect(escena.getCurrentImage()).toBe('img1.jpg');
  });

  test('debería avanzar al siguiente paso', () => {
    escena.nextStep();
    expect(escena.currentStep).toBe(1);
    expect(escena.getCurrentImage()).toBe('img2.jpg');
    expect(escena.direction).toBe('next');
  });

  test('debería retroceder un paso', () => {
    escena.currentStep = 2;
    escena.prevStep();
    expect(escena.currentStep).toBe(1);
    expect(escena.getCurrentImage()).toBe('img2.jpg');
    expect(escena.direction).toBe('prev');
  });

  test('no debería avanzar más allá del último paso', () => {
    escena.currentStep = escena.totalSteps - 1;
    escena.nextStep();
    expect(escena.currentStep).toBe(escena.totalSteps - 1);
  });

  test('no debería retroceder antes del primer paso', () => {
    escena.currentStep = 0;
    escena.prevStep();
    expect(escena.currentStep).toBe(0);
  });

  test('debería devolver el índice del indicador activo', () => {
    escena.currentStep = 1;
    expect(escena.getActiveIndicator()).toBe(1);
  });
});
