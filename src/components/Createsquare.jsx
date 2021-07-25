import React from 'react';

const Createsquare = ({inboxSendBg,deleteSendBg}) => {

    
    console.log('llego inboxSendBg-->',inboxSendBg.bg.bgcolor)

    const eliminar = () =>{
        deleteSendBg();
    }

    return (
        <>
        <div className="contentSquare__square"
        //  style={{backgroundColor:`${inboxSendBg.bg.bgcolor}`},{width:`${inboxSendBg.bg.dimension}px`}}
        style={{backgroundColor:`${inboxSendBg.bg.bgcolor}`,width:`${inboxSendBg.bg.dimension}px`,height:`${inboxSendBg.bg.dimension}px`}}
        onClick={eliminar}
         >
        </div>
        </>
        
    );
}

export default Createsquare;
