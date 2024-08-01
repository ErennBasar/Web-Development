import React, {useState} from 'react';

function ColourPicker(){

    const [colour,setColour] = useState("#FFFFFF");

    return(

        <div className='colour-picker-container' >
            <h1>Colour Picker</h1>
                 <div className='colour-display' style={{backgroundColor:colour}} >
                    <p>Selected Color: {colour}</p>
                 </div>
              <label>Select a Colour: </label>
            <input type="color"  value={colour} onChange={(event)=>{setColour(event.target.value)}} />  

        </div>
    );
}

export default ColourPicker;