import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private token: TokenStorageService , private router: Router) {}
  canActivate(): boolean {
    const token = this.token.getToken();
      if (!token) {
          this.router.navigateByUrl("/login");
      }
      return true;
  }

}
