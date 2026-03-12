import { Injectable } from '@angular/core';
import { from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Operators {
  mapOperators(value: number[]) {
    from(value)
      .pipe(map((x) => x * 10))
      .subscribe(console.log);

    of(value)
      .pipe(map(item=>item?.map(ele=>ele*2)))
      .subscribe((res)=>console.log(res))
  }
}

