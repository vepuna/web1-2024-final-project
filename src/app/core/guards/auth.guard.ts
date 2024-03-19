import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {Observable} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const localData =  localStorage.getItem('JWToken');
  if(localData != null) {
    return true;
  } else {
    router.navigateByUrl('/login')
    return false;
  }
};
