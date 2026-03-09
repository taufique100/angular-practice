import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userData = signal<any>({})
  userKey:string[] = ['']
  
  constructor(public route:ActivatedRoute){
    effect(()=>{
      this.userKey = Object.keys(this.userData())
      console.log('this.userKey', this.userKey)
    })
  }

  ngOnInit(){
    this.route.queryParams.subscribe((item)=>{
      console.log(item);
      this.userData.set(item)
    })
  }
}
