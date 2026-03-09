import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString'
})
export class TrimStringPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    // const [sizeofSrting] = args;
    console.log("sizeofSrting::", args)
    if(args.length){
      return value.substring(0, args[0]);
    }else{
      return value.substring(0,10)
    }
  }

}
