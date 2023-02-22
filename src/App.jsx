import { useState } from "react";
import { Card, Row, Col, Divider, Button } from "antd";
import "./App.css";
import foods from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { v4 as uuidv4 } from 'uuid'


function App() {
  const [foodsState, setFoodsState] = useState(foods);
  const [searchInput, setSearchInput] = useState('');
  const [show, setShow] = useState(true)

  function handleDelete(foodNameID) {
    setFoodsState(foodsState.filter(food => food.name !== foodNameID))
  }    
  return (
    <div className="App">
      {/* Display Add Food component here */}
      {show ? <Button type='button' onClick={() => setShow(false)}>Add New Food</Button>
       : <AddFoodForm setFoodsState={setFoodsState} />}
      {!show ? <Button type='button' onClick={() => setShow(true)}>Hide Form</Button> : ''}

      

      {/* Display Search component here */}
      <Search searchInput={searchInput} setSearchInput= {setSearchInput}/>
      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Render the list of Food Box components here */}
        {foodsState
        .filter((food) =>{
          if(food.name.toLowerCase().match(searchInput.toLowerCase())) {
            return food
          }
        })
        .map((food) => {
          return (
            <Col key={food.name}>
              <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10 }}
              >
                <img src={food.image} height={60} alt="food" />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                  <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => handleDelete(food.name)}> Delete </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
      {foodsState.length ? '' : <h1>oops you are a noob</h1>}
    </div>
  );
}
export default App;
