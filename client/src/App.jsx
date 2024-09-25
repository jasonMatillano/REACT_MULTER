import { useState } from 'react'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null)
  
  const updload = () => {
    const formData = new FormData()
    formData.append('image', file)
    axios.post('http://localhost:5000/single', formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
      <button onClick={updload}>Upload</button>
    </div>
  )
}

export default App
