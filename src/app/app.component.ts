import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

export interface TodoList{
  id: number;
  task: string;
  finzalizada: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  listaDeTarefas: TodoList[] = [];
  novaTarefa: string = '';

  adicionarTarefa(){
    @if (this.novaTarefa != '') {
      const listaDeTarefas: TodoList{
        id: Date.now;
        task: this.novaTarefa;
        finzalizada: false;
      };
      
      this.listaDeTarefas.push(novaTarefa);
      this.novaTarefa = '';
    }
  }
}
