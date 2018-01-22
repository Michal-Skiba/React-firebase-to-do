import React from 'react';
import "./HandleStatus.css"

const HandleStatus = ({ status }) => { // można bezpośrednio przekazać || (dd) ? true :false; ZMIEN NAZWE
    let answer = "";

    if(status === "start") {
       return(answer = <div id='loading'> LOADING </div>)
    }else if( status === "success"){
        return(answer = <div>pusty</div>)
    }else{
        return(answer = <div id='error'> ERROR </div>)
    }

    return (
        answer
    );

};

export default HandleStatus;

//(status === true) ?   (loading) : (status === false) ? (error) : (empty)