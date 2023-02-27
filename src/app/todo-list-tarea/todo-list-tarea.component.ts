import { Component } from '@angular/core';


interface Tarea {
  nombre: string;
  estimacion: string;
  id: number;
  columna: string;
}


interface TodoList{
  pendientes: Tarea[];
  enDesarrollo: Tarea[];
  enRevision: Tarea[];
  hechas: Tarea[];
}

@Component({
  selector: 'app-todo-list-tarea',
  templateUrl: './todo-list-tarea.component.html',
  styleUrls: ['./todo-list-tarea.component.scss'],
})
export class TodoListTareaComponent {
  nombreTarea: string = '';
  estimacionTarea: string = '';
  columnaSeleccionada: string = 'pendientes'; //por defecto va a ser la primera columna
  todoList: { [key: string]: Tarea[] } = {
    pendientes: [],
    enDesarrollo: [],
    enRevision: [],
    hechas: [],
  };

  idTarea: number = 0;

  agregarTarea() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estimacion: this.estimacionTarea,
      id: this.idTarea++,
      columna: this.columnaSeleccionada,
    };

    switch (this.columnaSeleccionada) {
      case 'pendientes':
        this.todoList.pendientes.push(tarea);
        break;
      case 'enDesarrollo':
        this.todoList.enDesarrollo.push(tarea);
        break;
      case 'enRevision':
        this.todoList.enRevision.push(tarea);
        break;
      case 'hechas':
        this.todoList.hechas.push(tarea);
        break;
    }

    this.nombreTarea = '';
    this.estimacionTarea = '';
  }

  eliminarTarea(columna: string, tarea: Tarea) {
    switch (tarea.columna) {
      case 'pendientes':
        this.todoList.pendientes = this.todoList.pendientes.filter(
          (t) => t.id !== tarea.id
        );
        break;
      case 'enDesarrollo':
        this.todoList.enDesarrollo = this.todoList.enDesarrollo.filter(
          (t) => t.id !== tarea.id
        );
        break;
      case 'enRevision':
        this.todoList.enRevision = this.todoList.enRevision.filter(
          (t) => t.id !== tarea.id
        );
        break;
      case 'hechas':
        this.todoList.hechas = this.todoList.hechas.filter(
          (t) => t.id !== tarea.id
        );
        break;
    }
  }
  moverTarea(columnaActual: string, tarea: Tarea, direccion: string) {
    const index = this.todoList[columnaActual].indexOf(tarea);
    let nuevaColumna: string | null = null;
    if (direccion === 'anterior') {
      nuevaColumna = this.getAnteriorColumna(columnaActual);
    } else if (direccion === 'siguiente') {
      nuevaColumna = this.getSiguienteColumna(columnaActual);
    }
    if (nuevaColumna) {
      this.todoList[columnaActual].splice(index, 1);
      this.todoList[nuevaColumna].splice(index, 0, tarea);
      tarea.columna = nuevaColumna;
    }
  }
  getAnteriorColumna(columnaActual: string): string | null {
    const columnas = ['pendientes', 'enDesarrollo', 'enRevision', 'hechas'];
    const index = columnas.indexOf(columnaActual);
    if (index > 0) {
      return columnas[index - 1];
    } else {
      alert('problemas');
    }
    return null; //esto está mal
  }

  getSiguienteColumna(columnaActual: string): string | null {
    const columnas = ['pendientes', 'enDesarrollo', 'enRevision', 'hechas'];
    const index = columnas.indexOf(columnaActual);
    if (index < columnas.length - 1) {
      return columnas[index + 1];
    } else {
      console.log('problemas');
    }
    return null;
  }
}
