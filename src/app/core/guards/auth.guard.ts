import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const isAuthenticated = !!sessionStorage.getItem('token'); 

    if (!isAuthenticated) {
      router.navigate(['/auth']);
      return false;
    }
  return true;
};
