import { Component, Input } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.scss'
})
export class TareaComponent {
  @Input() tarea:Tarea={nombre:"",duracion:0};
}