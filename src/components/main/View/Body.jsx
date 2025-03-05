import {React, useState, useEffect, useContext, createContext} from 'react';
import { useLocation } from 'react-router-dom';

function Body() {
  const location = useLocation();
  const formdata = location.state || {};

  return (
    <div className="body">
        <p>Your email is: {formdata.email}</p>
        <p>Your password is: {formdata.password}</p>
    </div>
  );
}

export default Body;
