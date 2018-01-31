import React from 'react';
import "./progress.css";
import firebase from "firebase";



const Progress = ({id}) =>{
    let progress = 0;
    let ref = firebase.database().ref('Task/' + id).child('progress');
    ref.on('value', snap =>(progress = snap.val()));

    let answer = 1;
    if( progress === 1) {
        return(answer = <div className='progress'>
            <div className='zero'>  </div>
        </div>)
    }else if(progress === 2){
        return(answer = <div className='progress'>
            <div className='quarter'>  </div>
        </div>)
    }else if( progress === 3){
        return(answer = <div className='progress'>
            <div className='half'>  </div>
        </div>)
    }else if (progress === 4 ){
        return(answer = <div className="progress">
            <div className="threeFourth">  </div>
        </div>)
    }else{
        return(answer = <div className="progress">
            <div className="full">  </div>
        </div>)
    }
    return (
        <div className='answerClass'>
            {answer}
        </div>
    );

};


export default Progress;