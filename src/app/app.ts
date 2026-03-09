import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { Todo } from './todo/todo';
import { Displaycount } from './displaycount/displaycount';
import { Controlcount } from './controlcount/controlcount';
import { TrimStringPipe } from './custome-pipe/trim-string-pipe';
import { CommonModule } from '@angular/common';
import { Header } from './component/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProfileComponent,
    Todo,
    Displaycount,
    Controlcount, 
    TrimStringPipe,
    CommonModule,
    RouterOutlet,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  subject: WritableSignal<string> = signal<string>("lorem epsum lorem epsum hai...")
  protected readonly title = signal('my-app');
}
