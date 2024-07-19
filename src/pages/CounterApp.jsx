import { useState } from "react"
import { Button } from "../components/Button"
import Message from "../components/Message"

export const CounterApp = () => {
    const [count, setCount] = useState(0)    
    const plus = () => {
        // count++;
        setCount(count+1)
        console.log('plus', count)
    }
    const minus = () => {
        // count--;
        setCount(count-1)
        console.log('minus', count)

    }
    return (
        <div className="container">
            <Message msg = "Counter App" color="alert alert-success text-center"/>
            <Message msg = "Counter Value is " color="alert alert-info" count={count}/>
            <Button fn = {plus}  val = "+" color="btn btn-primary"/> &nbsp;
            <Button fn = {minus} val = "-" color="btn btn-danger"/>
        </div>
    )
}
