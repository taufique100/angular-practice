import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-displaycount',
  imports: [],
  templateUrl: './displaycount.html',
  styleUrl: './displaycount.css',
})
export class Displaycount {
  constructor(public state:Counter){

  }
}
