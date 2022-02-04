import React from 'react'

import { LoadingProvider } from 'react-hot-loading'
// import 'react-hook-loading/dist/index.css'
import Hello from './Hello'

const App = () => {
  return (
    <>
      <Hello />
      <LoadingProvider />
    </>
  )
}

export default App
