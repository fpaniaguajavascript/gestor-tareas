import { Component } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenedor-tareas',
  standalone: true,
  imports: [TareaComponent, CommonModule],
  templateUrl: './contenedor-tareas.component.html',
  styleUrl: './contenedor-tareas.component.scss'
})
export class ContenedorTareasComponent {
  tareas:Tarea[]=[];
  constructor(){
    for(let i=0;i<3;i++){
      this.tareas.push({nombre:`Tarea ${i}`,duracion:10});
    }
    setInterval(()=>{
      this.tareas.push({nombre:'Nueva tarea',duracion:100})
    },1000);
  }
}
