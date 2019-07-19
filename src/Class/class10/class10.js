//Firebase Connection
import React from "react";
import firebase from "firebase"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAM8u590LUm8p40wPYH5dNO9MNTn7c-SmE",
    authDomain: "nodejsproject-a5cea.firebaseapp.com",
    databaseURL: "https://nodejsproject-a5cea.firebaseio.com",
    projectId: "nodejsproject-a5cea",
    storageBucket: "",
    messagingSenderId: "1067297968616",
    appId: "1:1067297968616:web:9fb32c86209f0fb2"
  };


  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();


class Class10 extends React.Component{

    componentDidMount(){
        db.collection('cities').add({
            name: 'Delhi',
            Country: 'India'
        }).then(ref => {
            console.log('Added document with ID: ', ref.id);
        })
    }

    Click=()=>{
        var docRef = db.collection("cities").doc('KIHq8txsIZQCAFlraGZm');

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.Click}>Click Me!</button>

            </div>
        );
    }
}

export default Class10;