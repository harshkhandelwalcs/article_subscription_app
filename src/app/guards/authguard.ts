import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {


    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('userData')) {
            // this.router.navigate(['/article/list']);
            return true;
        }
        // navigate to login page
        this.router.navigate(['/login']);
        localStorage.clear();
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }

}