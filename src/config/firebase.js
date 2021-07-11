import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyDnSsccE3zy6IJ0Cm9e57Wap8sVo4u6PR0",
    authDomain: "rent-a-ride-1f18e.firebaseapp.com",
    projectId: "rent-a-ride-1f18e",
    storageBucket: "rent-a-ride-1f18e.appspot.com",
    messagingSenderId: "652207086015",
    appId: "1:652207086015:web:bd0c06f6bf3fd431c2690a",
    measurementId: "G-BR6L9Q6RMQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
 async function Register(email,password){

  await  firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res)=>{
        console.log('register response--> ',res);
        alert('user registered successfully')
      }).catch((e)=>{
          console.log('register error--> ',e);
      })

  }

export {
    Register
}