import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


import { getAuth , signInWithEmailAndPassword} from "firebase/auth";
import { app } from '../../../server';


@Injectable()
export class LoginService {

    token: string;

    constructor(private router:Router){}

    login(email: string, password: string) {
        const app = firebase.initializeApp({
          apiKey: "AIzaSyC7QzXwCGSfvjEd62RCGF9F0DDsI31u88w",
          authDomain: "listado-personas-e4eb9.firebaseapp.com",
        });
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth,email, password)
              .then(
                userCredential => {
                      console.log(userCredential);
                      userCredential.user.getIdToken().then(
                        token =>{
                          console.log("token" + token)
                          this.token = token;
                          this.router.navigate(['/'])
                        }
                      )

                  }
              );

      }

    getIdToken(){
       return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }


    logout(){
       
    const auth = getAuth().signOut().then(() =>{
              this.token != null;
              console.log("dentro de signout")
              this.router.navigate(['login']);
          }).catch(error => console.log("error logout" + error));
    }

}