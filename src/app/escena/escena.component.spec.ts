import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Escena } from './escena';
import { IStep } from '../istep';

describe('Escena Component', () => {
  let component: Escena;
  let fixture: ComponentFixture<Escena>;

  const mockSteps: IStep[] = [
    { title: 'Paso 1', descripcion: 'Desc 1', url: 'img1.jpg', bgcolor: '#ff0000' },
    { title: 'Paso 2', descripcion: 'Desc 2', url: 'img2.jpg', bgcolor: '#00ff00' },
    { title: 'Paso 3', descripcion: 'Desc 3', url: 'img3.jpg', bgcolor: '#0000ff' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Escena],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(Escena);
    component = fixture.componentInstance;
    component.steps = mockSteps;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar en el paso 0', () => {
    expect(component.currentStep).toBe(0);
  });

  it('debería calcular correctamente el total de pasos', () => {
    expect(component.totalSteps).toBe(mockSteps.length);
  });

  it('debería avanzar un paso al llamar nextStep()', () => {
    component.nextStep();
    expect(component.currentStep).toBe(1);
    expect(component.direction).toBe('next');
  });

  it('debería retroceder un paso al llamar prevStep()', () => {
    component.currentStep = 2;
    component.prevStep();
    expect(component.currentStep).toBe(1);
    expect(component.direction).toBe('prev');
  });

  it('no debería avanzar más allá del último paso', () => {
    component.currentStep = component.totalSteps - 1;
    component.nextStep();
    expect(component.currentStep).toBe(component.totalSteps - 1);
  });

  it('no debería retroceder antes del primer paso', () => {
    component.currentStep = 0;
    component.prevStep();
    expect(component.currentStep).toBe(0);
  });
});
