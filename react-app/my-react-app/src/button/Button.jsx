import styles from "./Button.module.css";

function Button() {
  /*
  const clickEvent = () => console.log("clicked");

  const clickEvent2 = (name) => console.log(`${name}stop clicking`);

  return <button className={styles.button} onClick={()=> clickEvent2("eren ")} >Click </button>;
  */

  let count = 0;
  
  const handleClick = (name) => {

       count++;
    
       count < 3 ? console.log(`${name} clicked ${count} times`) : console.log(`${name} stop clicking me`) ;
    };
    

  return <button className={styles.button} onClick={()=>handleClick("bro")} > Click </button>;

}

export default Button;
