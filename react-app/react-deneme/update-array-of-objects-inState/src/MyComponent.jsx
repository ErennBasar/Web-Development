import { useState } from "react";


function MyComponent(){
  
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState();
    const [carBrand,setCarBrand] = useState("");
    const [carModel,setCarModel] = useState("");

    function addNewCar(){
             
        const newCar = {year:carYear,
                        brand:carBrand,
                        model:carModel
        }
        setCars(c => [...c,newCar] )
    }

    return(
        <div>
            <h1>List of Car Objects</h1>
            <p>Eklenecek Araba : {carYear} {carBrand} {carModel} </p>

            <input id="number-input" type="number" placeholder="  Year" value={carYear} onChange={(event)=>setCarYear(event.target.value)} />
            <input id="text-input-brand" type="text" placeholder="Brand" value={carBrand} onChange={(event)=>setCarBrand(event.target.value)} />
            <input id="text-input-model" type="text" placeholder="Model" value={carModel} onChange={(event)=>setCarModel(event.target.value)} />
            <button onClick={addNewCar} >Add Car</button>

            <ul>
                {cars.map((car,index) => <li key={index} >{car.year} {car.brand} {car.model} </li>)}
            </ul>
        </div>
    );

}
export default MyComponent;