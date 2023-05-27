import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[]=[];
  nombreTarea: string = '';

  constructor(){}

  ngOnInit(): void { }

  agregarTarea(){
    const tarea: Tarea= {
      nombre: this.nombreTarea,
      estado:false
    }
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminar(index:number){
    this.listaTareas.splice(index,1);
  }

  actualizarTarea(tarea:Tarea, i:number){
    this.listaTareas[i].estado = !tarea.estado;
  }

}
