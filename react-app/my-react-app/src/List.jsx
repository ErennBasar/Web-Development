import PropTypes from "prop-types"

function List({category="Category",items=[]}){

    

  // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // Alphabetical sort
  //  fruits.sort((a,b)=> b.name.localeCompare(a.name)); // Reverse Alphabetical
  //  fruits.sort((a,b) => a.calories - b.calories);     //Numeric 
  //  fruits.sort((a,b) => b.calories - a.calories);     //Reverse Numeric 

  //  const lowCalFruits = fruits.filter(f => f.calories < 100);
  //  const highCalFruits = fruits.filter(f => f.calories >= 100);
    

    const listItems = items.map(item  => <li key={item.id} > 
                                                     {item.name}:  <b>{item.calories}</b>
                                                     </li>)  // Each child in a list should have a unique "key" prop


                             

    return(
            <>
             <h3 className="list-category"> {category} </h3>
             <ol className="list-items">{listItems}</ol>
            </>
        );




 } ;
 List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  
              
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}

export default List;