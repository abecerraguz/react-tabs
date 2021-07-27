import React from 'react';

const Content = ({info,isSelected}) => {

    return (
        <div className={"contentForm" + (isSelected ? " selected" : "")}>
             <p>{info.info}</p>
        </div>
    );
    
}

export default Content;
