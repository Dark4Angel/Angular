import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private loginService: LoginService,
        private router: Router


    ){}

   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.loginService.isAutenticado()) {

            return true;
        }
        else{
            this.router.navigate(['login']);
            return false;
        }


    }


        
    }



