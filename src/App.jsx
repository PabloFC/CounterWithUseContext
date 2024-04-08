import './App.css'
import Button from './components/Button'
import CounterContextProvider from './context/CounterContext'
import Home from './views/Home'

function App() {

  return (
    <>
      <CounterContextProvider>
        <Home />
        <Button />
      </CounterContextProvider>
    </>
  )
}

export default App
