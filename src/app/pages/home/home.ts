import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Operators } from '../../services/operators';
import { FormControl, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  name = new FormControl('', [Validators.required])
  constructor(public router: Router, public operators:Operators){}

  ngOnInit(){
    this.operators.mapOperators([1,2,3,4,5])
    this.name.valueChanges.pipe().subscribe((value)=>console.log('value:', value))
  }

  redirectToProfile(){
    this.router.navigate(
      ['profile'],
      {
        queryParams:{
          name:'Shardar Khush Hoga',
          id:124,
          location:'pahadh ke us par'
        }
      }
    )
  }

  redirectToAbout(){
    this.router.navigate(['about', 'Arjun', 34])
  }


}
