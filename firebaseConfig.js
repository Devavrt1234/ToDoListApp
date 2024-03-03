// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import auth from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAkM7tszRLBw8FcsbnUYSixiw66NB5gFb4",
  authDomain: "myawesometodoapp-34a1e.firebaseapp.com",
  projectId: "myawesometodoapp-34a1e",
  storageBucket: "myawesometodoapp-34a1e.appspot.com",
  messagingSenderId: "223086809090",
  appId: "1:223086809090:web:b2e6ee2dbc4e3b0691d71b",
  measurementId: "G-J3NBY05QSK"
};

class Fire{


    constructor(callback){
        this.init(callback)
    }
    init(callback){


        if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().signInAnonymously().catch(error=>{
         
            if(user){
                callback(null,user);
            }
            else{
                firebase
                .auth()
                .signInAnonymously()
                .catch(error=>{
                    callback(error);
                })
            }
        })
    }

    getLists(callback){
        let ref=firebase.firestore().collection('users').doc(this.userId).collection('lists');

        this.unsubscribe=ref.onSnapshot(snapshot=>{
            lists=[]

            snapshot.forEach(doc=>{
                lists.push({id:doc.id,...doc.data()})
            })

            callback(lists);
        })
    }

    get userId(){
        return firebase.auth().currentUser.uid
    }
}


// Initialize Firebase

// const analytics = getAnalytics(app);

export default Fire;