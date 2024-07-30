import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./button/Button.jsx";
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Button></Button>
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
