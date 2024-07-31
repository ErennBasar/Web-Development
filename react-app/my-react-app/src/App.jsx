import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  const fruits = [{id: 1,name:"apple",calories:95 },
                  {id: 2,name:"orange",calories:45},
                  {id: 3,name:"banana",calories:105},
                  {id: 4,name:"coconut",calories:159},
                  {id: 5,name:"pineapple",calories:37}
];
const vegetables = [{id: 6,name:"broccoli",calories:55 },
                    {id: 7,name:"carrot",calories:35},
                    {id: 8,name:"potatoes",calories:145},
                    {id: 9,name:"corn",calories:69},
                    {id: 10,name:"celery",calories:27}
];

  return (
    <>
      <Header></Header>
      <Button></Button>

      {fruits.length > 0 ? <List  items={fruits} category="Fruits"></List> : <List   category=""></List> }
      {vegetables.length > 0 ? <List  items={vegetables} category="Vegetables"></List> : <List   category=""></List> }
      
      <UserGreeting isLoggedIn={true} ></UserGreeting>

      <Student name="Ahmet" age={30} isStudent={false}></Student>
      <Student name="Eren" age={23} isStudent={true}></Student>
      <Student name="Ali" age={38} isStudent={false}></Student>
      <Student age={21}></Student>
      
      <Card name="Eren" job="CS Student"></Card>
      <Card name="Ahmet" job="DEV Ops"></Card>
      <Card name="Ahmet" job="Project Manager"></Card>
      <Card></Card>

      <Footer></Footer>
    </>
  );
}

export default App;
