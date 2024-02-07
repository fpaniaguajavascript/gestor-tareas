import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContenedorTareasComponent } from './components/contenedor-tareas/contenedor-tareas.component';
import { RelojComponent } from './components/reloj/reloj.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareaComponent, FormularioComponent, ContenedorTareasComponent, RelojComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestor-tareas';
}
