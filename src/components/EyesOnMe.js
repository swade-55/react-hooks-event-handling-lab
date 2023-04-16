// Code EyesOnMe Component Here
import React from 'react';
function EyesOnMe(){
    function focusEvent(){
        console.log('Good!')
    }
    function blurEvent(){
        console.log('Hey! Eyes on me!')
    }
    return (
        <button onFocus={focusEvent} onBlur={blurEvent}>Eyes on me</button>
        //how do I use the same button to listen to 2 seperate events?
    )
}

export default EyesOnMe;