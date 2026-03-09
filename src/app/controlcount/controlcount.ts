import { Component, signal, WritableSignal } from '@angular/core';
import { Counter } from '../store/counter';
import { HighlightPipe } from '../custome-pipe/highlight-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controlcount',
  imports: [HighlightPipe, CommonModule],
  templateUrl: './controlcount.html',
  styleUrl: './controlcount.css',
})
export class Controlcount {
  constructor(public state:Counter){}

  text:WritableSignal<string> = signal<string>('lorem epsum value and get')

}
