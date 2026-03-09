import { Component, signal } from '@angular/core';

// import {form} from '@angular/forms';

@Component({
  selector: 'app-signal-form',
  imports: [],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  loginModel = signal({
    name:'',
    email:'',
    password:'',
  })

  // loginForm = form(this.loginModel)
}
