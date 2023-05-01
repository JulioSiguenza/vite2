import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cabecera from './components/Cabecera'
import ImagenTexto from './components/ImagenTexto'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Cabecera />
      
      <h1 className='text-danger'>Primer Vite</h1>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Login/>
      <ImagenTexto/>

    </div>
  )
}

export default App
