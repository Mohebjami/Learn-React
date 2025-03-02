import {React,useState} from 'react'

function App() {
  const arr = ['a','b','c']
  const [newdata ,setNewdata] = useState(arr);

  const handelAdd = ()=>
    {
      setNewdata((prev) => {
        const result = [...prev]
        result[prev.length] = 'New Item'
        return result
      })
    }
  const handelDelete = (index)=>{
    setNewdata((prev)=>{
      let result = [...prev]
      result.splice(index, 1)
      return result;
    })
  }

  const handelUpdate = (index) => {
    setNewdata((prev) => {
      const result = [...prev]
      result[index] = 'New Item update '
      return result
    })
  }


  return (
    <div>
      {newdata.map((item, index) => (
        <><ul>
          <li key={index}>{item}</li>
          <button type="button" onClick={() => { handelDelete(index); }}>Delete</button>
          <button type="button" onClick={() => { handelUpdate(index); }}>Update</button>
        </ul>
        </>
      ))}
      <button type="button" onClick={handelAdd}> add new item</button>
    </div>
  )
}

export default App