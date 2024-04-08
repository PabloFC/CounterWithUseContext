import { useCounterContext } from "../context/CounterContext"


const Button = () => {
    const {counter, setCounter} = useCounterContext()

    function increment() {
        setCounter(counter+1)
    }

  return (
    <div>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}

export default Button
