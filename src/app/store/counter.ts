import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
    count:WritableSignal<number> = signal<number>(10)

    increament(){
      this.count.update(prev=>prev+1);
    }

    decreament(){
       this.count.update(prev=>prev == 0 ? 0 : prev-1)
    }

    reset(){
      this.count.set(0)
    }
}
