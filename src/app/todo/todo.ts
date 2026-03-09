import { Component, effect, EventEmitter, Input, Output, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  @Input() numValue: number = 0;
  @Output() clickFromChild = new EventEmitter<string>();


  sendData(){
    this.clickFromChild.emit("Taufique");
  }
 ngOnChanges(changes: SimpleChanges) {
    console.log('numValue changed:', changes['numValue']?.currentValue);
  }
  
  private _isLogin = signal(false);
  readonly isLogin = this._isLogin.asReadonly();
  name = signal<string>('Enter Name')
  age: number = this.numValue

  users = signal<string[]>(["Ram", "Shayam","Radha"]);

  status = signal<string>("noStarted");

  handleLogin(){
    this._isLogin.set(true)
  }

  handleLogout(){
    this._isLogin.set(false)
  }

  handleSelectChange(e : Event){
    const target = e.target as HTMLSelectElement;
    this.status.set(target.value)
  }

  // handleInputChange()

  employee = signal<string>('');
  get co_employee(){
    return this.employee()
  }

  set co_employee(val: string){
    this.employee.set(val)
  }
}
