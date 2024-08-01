import React, {useState} from 'react';
 
 function Counter(){

    const [count,setCount] = useState(0);

    return(
        <div className="counter-container">
            <p className='count-display'>{count}</p>
            <button className='counter-button-increment' onClick={()=>{
             
               setCount(c => c +1);  // Updater function
               setCount(c => c +1);  // A function passed as an argument to setState() usually ex. setYear(y=>y+1)
               setCount(c => c +1);  
                                                                                                        
            }} >Increment</button>

            <button className='counter-button-reset' onClick={()=>{setCount(0)}} >Reset</button>

            <button className='counter-button-decrement' onClick={()=>{setCount(count - 1)}} >Decrement</button>
        </div>
    );
 }

 export default Counter;