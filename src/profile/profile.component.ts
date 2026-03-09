import { Component, effect, signal } from "@angular/core";
import { Todo } from "../app/todo/todo";

@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.css',
    imports:[Todo]
})

export class ProfileComponent{
     num1:number = 0;

     count = signal(10)

     constructor(){
        effect(()=>{
            console.log('this is num1:', this.num1)
            console.log('this is Signal:', this.count)
            if(this.count()==10){
                this.count.set(0)
            }
        })
     }

     clickFromChild(name: string){
        console.log('cliked from Child', name)
     }

    handleClick(event: MouseEvent):void{
        console.log('Fn call')
        console.log((event.target as Element).classList)
        this.otherFunction()
    }

    otherFunction(){
        console.log('Other Function')
    }

    changeInput(e:Event){
        console.log((e?.target as HTMLInputElement).value)
    }

    UpdateData(){
        this.num1++;
    }

    updateSingladata(){
        this.count.set(this.count()+1)
    }
}