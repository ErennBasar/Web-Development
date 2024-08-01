import React, {useState} from "react";

 function MyComponent(){

      const [name,setName] = useState("Guest");
      const [quantity,setQuantity] = useState(0);
      const [comment,setComment] = useState("");
      const [payment,setPayment] = useState("");
      const [shipping,setShipping] = useState("");




      return(
        <div>
              <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} />
              <p>Name:{name}</p>

              <input type="number" value={quantity} onChange={(event)=>{setQuantity(event.target.value)}} />
              <p>Quantity:{quantity}</p>

              <textarea id="text-area"  value={comment} onChange={(event) => {setComment(event.target.value)}}
                
                placeholder="Enter delivery instructions"
              ></textarea>
              <p>Comment:{comment}</p>

              <select id="select-area" value={payment} onChange={(event)=>{setPayment(event.target.value)}} >
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
              </select>
              <p>Payment: {payment}</p>

              <label>
                <input type="radio" value="PickUp" checked={shipping === "PickUp"} onChange={(event)=>{setShipping(event.target.value)}}/>
                Pick Up
              </label><br />
              <label>
              <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={(event)=>{setShipping(event.target.value)}}/>
                 Delivery
              </label>
              <p>Shipping: {shipping}</p>
        </div>
      );

 };

 export default MyComponent;