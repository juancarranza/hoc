import React, { Component } from 'react';

const WithSomeLogic = (Component) => {
//Do something...

  return (props) => {
    return <Component {...props} />;     
  };
};

export default WithSomeLogic;