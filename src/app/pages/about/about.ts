import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  userData = signal<any>({})
  userKey:string[] = ['']

  constructor(public route:ActivatedRoute){
    effect(()=>{
      this.userKey = Object.keys(this.userData())
       console.log('about::', this.userKey)
    })
  }

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.userData.set(params)
    })
  }
}
