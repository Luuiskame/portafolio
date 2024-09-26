import { useState } from 'react'
import './App.css'

import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import MainHeader from './Components/Header/MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainHeader/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
