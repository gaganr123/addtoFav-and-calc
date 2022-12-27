import AddtoFav from "./addtofavourite/AddtoFav";
import Calculator from "./calculator/Calculator";
import TodoList from "./components/context/TodoList";
import Header from "./components/Header";
// import CardsDetails from "./components/CardsDetails";
// import { Routes, Route } from "react-router-dom";
// import Cards from "./components/Cards";
import Practice from "./components/Practice";
function App() {
  // const arr = ["react", "php", "html"];
  // const alertFun = () => {
  //   return alert("I am alert funtion");
  // };
  return (
    <>
      <Header />
      <Practice />
      <TodoList />
      <Calculator />
      <AddtoFav />
      {/* author="Gagan Rawat" programming={arr} alerting={alertFun} */}
      {/* <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
      </Routes> */}
    </>
  );
}

export default App;
