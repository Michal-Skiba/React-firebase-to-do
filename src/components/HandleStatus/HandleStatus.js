import React from 'react';
import "./HandleStatus.css"

const HandleStatus = ({ status }) => {
    let answer = "";
    if(status === "start") {
       return(answer = <div id='loading'> LOADING </div>)
    }else if( status === "success"){
        return(answer = <div></div>)
    }else{
        return(answer = <div id='error'> ERROR </div>)
    }
    return (
        answer
    );
};

export default HandleStatus;

