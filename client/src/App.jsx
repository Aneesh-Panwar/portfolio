import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import MainSec from './components/MainSec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='md:px-3xl sm:px-100 relative h-screen'>

      <div className='relative' >
       <div id='home'>
         <Head/>
       </div>
        <MainSec/>
      </div>
    </div>
  )
}

export default App
