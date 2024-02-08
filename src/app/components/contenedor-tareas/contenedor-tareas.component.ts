import { Component } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-contenedor-tareas',
  standalone: true,
  imports: [TareaComponent, CommonModule],
  templateUrl: './contenedor-tareas.component.html',
  styleUrl: './contenedor-tareas.component.scss'
})
export class ContenedorTareasComponent {
  tareas:Tarea[]=[];
  constructor(private servicioTareas:TareasService){
    this.tareas = servicioTareas.tareas;
  }
}
