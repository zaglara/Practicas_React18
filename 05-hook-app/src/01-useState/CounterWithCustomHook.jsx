import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>CounterWithCustomHook: {counter}</h1>
            <hr />
            <button className="btn btn-outline-dark" onClick={()=>increment(2)}>+1</button>
            <button className="btn btn-outline-dark" onClick={reset}>Reset</button>
            <button className="btn btn-outline-dark" onClick={()=>decrement(2)}>-1</button>
        </>
    )
}
