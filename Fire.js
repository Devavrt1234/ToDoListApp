// Firebase app is container like object that 
//  stores common configurations
//  and shares authentication between different firbase servics.

import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkM7tszRLBw8FcsbnUYSixiw66NB5gFb4",
    authDomain: "myawesometodoapp-34a1e.firebaseapp.com",
    projectId: "myawesometodoapp-34a1e",
    storageBucket: "myawesometodoapp-34a1e.appspot.com",
    messagingSenderId: "223086809090",
    appId: "1:223086809090:web:147793d310cfb82591d71b",
    measurementId: "G-RLS919XG6J"

    
  };

class Fire{

    constructor(callback){
        this.init(callback)
    }
    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user=>{

            if(user){
                callback(null,user)
            }
            else{
                firebase
                .auth()
                .siginInAnonymously()
                .catch(error=>{
                    callback(error);
                });
            }
        });
    }
}

const app = initializeApp(firebaseConfig);
export default Fire;
