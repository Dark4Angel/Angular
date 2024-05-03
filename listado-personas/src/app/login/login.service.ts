import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';




@Injectable()
export class LoginService {

    token: string;

    constructor(private router:Router){}

/*     login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log(response);
                    firebase.auth().currentUser.getIdToken().then(
                        token() => {
                            this.token = token;
                            console.log("token obtenido:" + this.token);
                        }
                    )
                }
            )
            this.router.navigate(['/']);
                }
            
    } */

    

}
