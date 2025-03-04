import {React, useState, useEffect, useContext, createContext} from 'react';
import { useLocation } from 'react-router-dom';

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Moheb");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2({giveName}) { 
  return(
    <>
     <h1>this is component 2 and name is : {giveName}</h1>
     <Component3/>
    </>
   
  )
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


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
        <Component1/>
    </div>
  );
}

export default Body;
