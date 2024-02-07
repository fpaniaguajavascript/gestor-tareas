import { Component, Input } from '@angular/core';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.scss'
})
export class TareaComponent {
  @Input() nombre:string="";
  public duracion:number=8;
}
