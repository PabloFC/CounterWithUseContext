import {  useCounterContext } from "../context/CounterContext"


const Home = () => {

    const {counter} = useCounterContext()

  return (
    <div>
      <h1>El valor del contador es {counter}</h1>
    </div>
  )
}

export default Home
