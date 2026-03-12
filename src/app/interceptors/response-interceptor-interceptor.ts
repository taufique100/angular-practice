import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const responseInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map(event=>{
      if(event instanceof HttpResponse){
        const modifiedResponse={
          ...event.body,
          intercept:true
        };
        return event.clone(modifiedResponse);
      }
      return Event;
    })
  )
};
