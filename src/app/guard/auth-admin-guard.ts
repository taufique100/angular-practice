import { CanActivateFn, CanDeactivateFn } from '@angular/router';


interface CanExit{
  canExit:()=>boolean
}

export const authAdminGuard: CanDeactivateFn <CanExit>= (component) => {
  if(component.canExit()){
    return true;
  }
   return confirm("You have unsaved changes. Leave anyway?");
};
