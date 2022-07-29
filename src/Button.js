import React from 'react';
import WithSomeLogic from './WithSomeLogic';

const Button = ({onClick}) => {

    return <button onClick={onClick}>Click me!</button>;
};//Crea el componente Button

export default WithSomeLogic(Button, {componentName: "Button"});//Al exportar hace un llamado al HigherComponente -> WithSomeLogic