import { Component } from '@angular/core';

export interface TodoList{
  id: number;
  task: string;
  finzalizada: boolean
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
