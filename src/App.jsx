import React, { useState } from 'react'

function App() {
  const arr = ['a', 'b', 'c']
  const [up , setUp] = useState(arr)

  const handleUpdate = () => {
    setUp((prev) => {
      const result = [...prev]
      result[prev.length] = 'new item'
      return result
    });
  }

  const handleDelete = (index) => {
    setUp((prev) => {
      let result = [...prev]
      result.splice(index, 1)
      return result;
    });
  }

  return (
    <div>
      <ul>
        {up.map((item, index) => (
          <><li key={index}>{item}</li><button onClick={() => { handleDelete(index); } }>Delete</button></>
        ))}

      </ul>
      <button onClick={handleUpdate}>Update</button>

    </div>
  )
}

export default App