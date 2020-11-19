import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {PassModalComponent} from "./pass-modal/pass-modal.component";
import {ValidateService} from "./validate.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root', deps: [MatDialog, ValidateService]
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private dialog: MatDialog,
    private validateService: ValidateService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivate:');
    console.log(state);
    console.log(next);
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanLoad:');
    console.log(route);
    console.log(segments);

    const dialogRef = this.dialog.open(PassModalComponent, {width: '250px',
    data: {pass: ""}});

    // return dialogRef.afterClosed().pipe(map(pass=>{
    //   if( pass && this.validateService.validate(pass)) return true;
    //   this.router.navigate(['']);
    //   return false;
    // }));

    return new Promise((res, rej)=>{
      dialogRef.afterClosed().subscribe((pass)=>{
        if(pass && this.validateService.validate(pass)){
          return res(true);
        }
        this.router.navigate(['']);
        return res(false);
      })
    });

  }

}
