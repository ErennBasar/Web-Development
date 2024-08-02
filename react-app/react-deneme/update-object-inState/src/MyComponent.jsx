import React, {useState} from 'react'

function MyComponent(){

    const [car,setCar] = useState({year:2024,
                                   marka:"Ford",
                                   model:"Mustang"
    });

    return(
        <div>
            <p> Your dream car is {car.year} {car.marka} {car.model} </p>

            <input type="number" value={car.year} onChange={(event)=>setCar(c => ({...c,year:event.target.value}))} />
            <input type="text" value={car.marka} onChange={(event)=>setCar(c => ({...c,marka:event.target.value}))} />
            <input type="text" value={car.model} onChange={(event)=>setCar(c => ({...c,model:event.target.value}))} />
        </div>
    );

}
export default MyComponent;