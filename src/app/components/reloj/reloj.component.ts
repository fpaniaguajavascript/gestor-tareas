import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.scss'
})
export class RelojComponent {
  hora:string="";
  constructor(){
    setInterval(()=>{
      let ahora = new Date();
      let minutos = new String(ahora.getMinutes());
      let segundos = new String(ahora.getSeconds());
      minutos = minutos.length<2 ? "0"+minutos : minutos;
      segundos = segundos.length<2 ? "0"+segundos : segundos;
      this.hora = ahora.getHours()+":"+minutos+":"+segundos;
    },1000);
  }
}
