import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import MainSec from './components/MainSec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='sm:px-3xl sm:px-100 relative h-screen z-50'>

      <div className='relative' >
        <Head/>
        <MainSec/>
      </div>
    </div>
  )
}

export default App
