import { useState } from "react";

function MyComponent(){

    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);

    function addFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        
        setFoods(f => [...f,newFood]);
    };
    function removeFood(k){

        setFoods(foods.filter((_,i) => i !== k  ));
    }

    return(
        <div>
            <h2>List Of Food</h2>
            <ul>
                {foods.map((food,index)=> <li key={index} onClick={()=>removeFood(index)} >{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={addFood}>Add Food</button>
        </div>
    );
}
export default MyComponent;