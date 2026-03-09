import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(public router: Router){}

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
