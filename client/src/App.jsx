import { useState } from 'react'
import './App.css'

import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
