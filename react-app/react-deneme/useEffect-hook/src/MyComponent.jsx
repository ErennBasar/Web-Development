// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(() => {})                   //Runs after every re-render

// useEffect(() => {}, [])               //Bu form, sadece bileşen ilk kez ekrana monte edildiğinde çalışır . 
//                                       Yani, sadece bir kez çalışmasını istediğiniz etkileri buraya yerleştirebilirsiniz.

// useEffect(() => {}, [value])          //Bu form, bileşenin ilk monte edilmesinde ve value adlı bir değişkenin her güncellendiğinde çalışır. 
//                                       Yani, belirli bir state veya props değeri değiştiğinde çalışmasını istediğiniz etkileri buraya koyabilirsiniz.
import React, {useState,useEffect} from 'react';

function MyComponent(){

//     const [count,setCount] = useState(5);
//     const [color,setColor] = useState("green");

//     useEffect(()=>{
//         document.title = `Count: ${count} ${color}`
        
//     },[count,color])

//     return(
//     <div>
//         <p style={{color:color}} >Count:{count}</p>
//         <button onClick={()=> setCount(c => c + 1)} >Add</button>
//         <button onClick={()=> setCount(c => c - 1)} >Subtract</button>
//         <button onClick={()=> setColor(c => c === "green" ? "red" : "green" )} >Change Color</button>
//     </div>
//     );

  const [width,setWidth] = useState(window.innerWidth);
  const [heigth,setHeigth] = useState(window.innerHeight);

  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("EVENT LISTENER ADDED");

        return() => {
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
  },[]);

  useEffect(() => {

    document.title = `size: ${width} x ${heigth} `;
  },[width,heigth]);

  function handleResize(){
    setWidth(window.innerWidth);
    setHeigth(window.innerHeight);
  }



return (
    <>
        <p>Window Width: {width}px</p>
        <p>Window Heigth: {heigth}px</p>
    </>
);



}
export default MyComponent;