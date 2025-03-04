import {React, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function Body() {
  const location = useLocation();
  const formdata = location.state || {};
  const [name , setName] = useState(formdata.username)

  const handleChange = ()=>{
    setName((prev) => {
      prev = 'Ali'
      return prev
    })
    
    console.log('this is a test');
  }

  console.log(name)
  useEffect(()=>{
    console.log(name);
    if(name == "Ali")
      {
         setName((prev)=>{
      prev = "Jami"
      return prev
    })
      }
  }, [name])

  return (
    <div className="body">
        <h1 className="text-2xl font-bold">Welcome, {formdata.username || 'User'}!</h1>
        <p>Your email is: {formdata.email}</p>
        <p>Your password is: {formdata.password}</p>
        <p>{name}</p>
        <button className="flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100" type="button" onClick={handleChange}>This is button</button>
    </div>
  );
}

export default Body;
