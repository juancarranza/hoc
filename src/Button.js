import React from 'react';
import WithSomeLogic from './WithSomeLogic';

const Button = ({onClick}) => {
  
  const onButtonClick = () => {
    console.log("Log desde el componente");
    onClick();
  }
  
    return <button onClick={onButtonClick}>Click me!</button>;
};//Crea el componente Button

export default WithSomeLogic(Button);//Al exportar hace un llamado al HigherComponente -> WithSomeLogic