import React from 'react';

const Text = ({onClick}) => {
    const onButtonClick = () => {
        console.log("Log desde el componente");
        onClick();
    };

    return (
        <div onClick={onButtonClick}>Text</div>
    );
};

export default Text;