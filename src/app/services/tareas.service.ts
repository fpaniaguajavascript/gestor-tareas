import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  public tareas:Tarea[]=[];
  constructor() { }
  addTarea(tarea:Tarea){
    this.tareas.push(tarea);
    this.tareas.forEach(tarea => {
      console.log(tarea.nombre);
    });
  }
}
