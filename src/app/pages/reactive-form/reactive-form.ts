import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  // email = new FormControl("");
  // password = new FormControl("")

  signupForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  get name(){
    return this.signupForm.get("name") as FormControl
  }

  get email(){
    return this.signupForm.get("email") as FormControl
  }
  get password(){
    return this.signupForm.get('password') as FormControl
  }

  // handleLogin(){
  //   console.log(this.email.value, this.password.value);
  // }

  // reset(){
  //   this.email.setValue("")
  //   this.password.setValue("")
  // }

  // -------------------
  handleSubmit(){
    console.log(
      this.signupForm.value
    )
  }
}
