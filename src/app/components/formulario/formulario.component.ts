import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../interfaces/tarea';
import { TareasService } from '../../services/tareas.service';
@Component({
    selector: 'app-formulario',
    standalone: true,
    templateUrl: './formulario.component.html',
    styleUrl: './formulario.component.scss',
    imports: [FormsModule]
})
export class FormularioComponent {
  tarea:Tarea={nombre:"",duracion:0};
  constructor(private servicioTareas:TareasService){
    
  }
  agregarTarea(){
    console.log("Agregando tarea...");
    this.servicioTareas.addTarea({...this.tarea});//spread operator para crear un duplicado del objeto
  }
}
