import React, {useState} from 'react';
 
 function Counter(){

    const [count,setCount] = useState(0);

    return(
        <div className="counter-container">
            <p className='count-display'>{count}</p>
            <button className='counter-button-increment' onClick={()=>{setCount(count + 1)}} >Increment</button>

            <button className='counter-button-reset' onClick={()=>{setCount(0)}} >Reset</button>

            <button className='counter-button-decrement' onClick={()=>{setCount(count - 1)}} >Decrement</button>
        </div>
    );
 }

 export default Counter;