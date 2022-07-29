import React from 'react';
import WithSomeLogics from './WithSomeLogic';

const Text = ({onClick}) => {
    return (
        <div onClick={onClick}>Text</div>
    );
};

export default WithSomeLogics(Text, {componentName:"Text"});