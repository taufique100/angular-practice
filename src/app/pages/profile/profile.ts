import { AfterViewInit, Component, effect, ElementRef, OnInit, Renderer2, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements AfterViewInit, OnInit {
  userData = signal<any>({})
  userKey:string[] = ['']
  
  constructor(public route:ActivatedRoute, public el: ElementRef, public renderer: Renderer2){
    effect(()=>{
      this.userKey = Object.keys(this.userData())
      console.log('this.userKey', this.userKey)
    })
  }

  ngAfterViewInit(){

  }

  ngOnInit(){
    const box = this.el.nativeElement.querySelector('div')
    this.renderer.setStyle(box, 'color', 'red')
    this.route.queryParams.subscribe((item)=>{
      console.log(item);
      this.userData.set(item)
    })
  }
}
