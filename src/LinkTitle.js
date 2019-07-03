import React from 'react';

const LinkTitle =  (props)=>{
return (
    <a
            className="App-link"
            href="https://reactjs.org"
  
          >
            {
              `
              ${props.msg.firstName} ${props.msg.surName}

              `
              
              }
          </a>
    )
}

export default LinkTitle;