import React, { Component, useEffect } from 'react';

const WithSomeLogic = (Component, params) => {
  
  /* useEffect(() => {
    console.log("Investigar");
  }, 
  []
  ); No corrio dijo que iba a investigar que paso.*/
  
  return (props) => {
    const onClick = () => {
      console.log(`Click desde HOC, llamado desde el componente ${params.componentName}`);
      props.onClick();
    };

    return <Component {...props} onClick={onClick}/>;     
  };
};

export default WithSomeLogic;