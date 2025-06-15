import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import MainSec from './components/MainSec'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:px-100 relative h-screen'>

      <div className='relative' >
       <div id='home'>
         <Head/>
       </div>

       <div>
        <MainSec/>
       </div>

       <div className='relative z-6 mt-0'>
        <Footer/>
       </div>
      </div>
    </div>
  )
}

export default App
