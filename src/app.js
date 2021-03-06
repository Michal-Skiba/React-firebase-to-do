import React, { Component } from 'react';
import Todo from './containers/toDo';
import firebase from 'firebase';

class App extends Component {
    constructor(props){
        super(props);
        var config = {
            apiKey: "AIzaSyA59FiRC6Y0g1Js2fk0dHkpi82bGho9RKk",
            authDomain: "react-7e278.firebaseapp.com",
            databaseURL: "https://react-7e278.firebaseio.com",
            projectId: "react-7e278",
            storageBucket: "react-7e278.appspot.com",
            messagingSenderId: "912501708249"
        };
        firebase.initializeApp(config);
    }
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
