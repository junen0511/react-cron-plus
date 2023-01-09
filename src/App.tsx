import React from 'react'
import ReactCron from './components/ReactCron'
import './App.css'

function App() {
  const onChangeCron = (value: any) => {
    console.log(value)
  }
  return (
    <div className="App">
      <ReactCron onChange={onChangeCron} />
    </div>
  )
}

export default App
