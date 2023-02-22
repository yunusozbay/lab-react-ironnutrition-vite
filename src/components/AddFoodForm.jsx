import { Divider, Input } from 'antd';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

// Iteration 4
function AddFoodForm({ setFoodsState }) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories , setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        setFoodsState(prevFoods => {
            return [...prevFoods, { name, image, calories, servings, id: uuidv4()}]
        })
        console.log({ name, image, calories, servings, id: uuidv4() })
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={event => setName(event.target.value)} />

      <label>Image</label>
      <Input value={image} type="text" onChange={event => setImage(event.target.value)} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={event => setCalories(event.target.value)} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={event => setServings(event.target.value)} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
