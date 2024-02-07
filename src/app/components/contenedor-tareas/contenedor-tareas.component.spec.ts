import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorTareasComponent } from './contenedor-tareas.component';

describe('ContenedorTareasComponent', () => {
  let component: ContenedorTareasComponent;
  let fixture: ComponentFixture<ContenedorTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
