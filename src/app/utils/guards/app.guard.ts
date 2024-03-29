import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localstorage.service';
@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanLoad, CanActivate {
  currentUrl: string;
  constructor(
    private localStorageService: LocalStorageService,
    public router: Router
  ) { }
   
  

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.localStorageService.get('access_token')) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
  
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.localStorageService.get('access_token')) {
      this.router.navigate(['main']);
      return false;
    }
    else {
      return true;
    }
  }
}
