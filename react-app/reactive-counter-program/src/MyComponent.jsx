import React, {useState} from 'react';

 function MyComponent(){

    const [name , setName] = useState();
    const [age , setAge] = useState(0);
    const [isEmployed , setIsEmployed] = useState(false); 
    
    const updateName = () => {
        setName("SpongeBob")
    }

    

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName} >Set Name</button>

            <p>Age:{age}</p>
            <button onClick={()=>{setAge(age + 1)}} >Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={()=>{setIsEmployed(!isEmployed)}} > Toggle Status</button>
        </div>
    );
 }

 export default MyComponent;