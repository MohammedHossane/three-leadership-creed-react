import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import Header from '../../components/Header/Header'

export default function Home() {
  console.log("re render");

  // scope start
  // create variable in state to track our counter
  const [counter, setCounter] = useState(0);

  /**
   * if array is empty, only run once on component load
   */
  useEffect(() => {
    console.log("fetch local storage data");
    // if not undefined
    if (localStorage.getItem("counter-value")) {
      setCounter(parseInt(localStorage.getItem("counter-value")));
    }
  }, []);

  // function increment
  const onIncrease = () => {
    console.log("increase");
    setCounter(counter + 1);

    localStorage.setItem("counter-value", counter + 1);
  }; /// end of the scope

  // function decrease
  const onDecrease = () => {
    console.log("decrease");
    setCounter(counter - 1);
    //
  };

  function onMouseOver() {
    console.log("m,ouse over");
  }

  return (
    <div>
    
      <Header color="red">daniel</Header>
      <Header color="blue">julian</Header>
      <Header color="black">r4enzo</Header>

      <Footer />
    </div>
  );
} //scope end
