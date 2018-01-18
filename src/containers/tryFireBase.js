import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from "firebase";
import Button from 'material-ui/Button';
import * as actionTypes from "../../../redux--05-finished/src/store/actions";

class Tasks extends Component {
    /*
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            dates: []
        };
    }
    */
    componentWillMount(){
        let messagesRef = firebase.database().ref().child('tasks');
        console.log(messagesRef);
        //let firebaseRef = firebase.database().ref().child("Users").child(userID).child('money');
        messagesRef.on('value', function (data) {


        });
       // user.delete()


        //let x = messagesRef.child("date");
        //console.log(x);
        /*let messagesRef = firebase.database().ref('tasks').orderByKey();
        messagesRef.on('child_added', snapshot => {
            let message = messagesRef.ref("date")
            let task = messagesRef.ref("task");
            let date = { text: snapshot.val(), id: snapshot.key };
            this.setState({ messages: [message].concat(this.state.messages) });
            this.setState({ dates: [date].concat(this.state.dates) });
        })
        */
    }
    addMessage(e){
        e.preventDefault();
        let taskRef = firebase.database().ref('tasks').push();
        taskRef.set({
            task: this.inputEl.value,
            date: this.inputElement.value
        });
        //firebase.database().ref('tasks').push( this.inputEl.value );
        //irebase.database().ref('dates').push( this.inputEl.value );

        this.inputEl.value = '';
        this.inputElement.value = '';
        //dodanie daty
        //firebase.database().ref('dates').push( this.inputElement.value );
         //
    }

    render() {
        return (
            <form onSubmit={this.addMessage.bind(this)}>
                <input type="text" ref={ el => this.inputEl = el }/>
                <input type="text" ref={ el => this.inputElement = el }/>
                <input type="submit"/>
                <ul>
                    {this.state.messages.map( message => <li key={message.id}>{message.text}</li> )}
                    {this.state.dates.map( date => <li key={date.id}>{date.text}</li> )}
                </ul>

            </form>
        );
    }
}

export default Tasks;




const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};



const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);