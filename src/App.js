import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Buttons from './Components/Buttons';
import {useState} from 'react'
import Form from './Components/Form';
function App() {
  const [isChecked,setCheck]=useState(false);
  const [vehicle,setVehicle]=useState([]);
  const [pressed,setPressed]=useState("checked");
  const add=()=>{
   setPressed("checked");
   setCheck(true);
  }
  const update=(e)=>{
    if(pressed==="checked")
  { setVehicle([...vehicle,e]);
   setCheck(false);
  }
  else
  {  setVehicle(vehicle =>
    vehicle.filter(employee => {
      return employee.vehicleNo !==e.vehicleNo ;
    }),
  );
    setCheck(false);
  }
  }
  const remove=()=>{
   setPressed("unchecked");
   setCheck(true);
  }
  console.log(vehicle.length);
  const myStyle={
    backgroundColor:"#0066A2", 
  border: "none",
  color:"white",
  padding: "20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "30px",
  cursor:" pointer",
  borderRadius:"25%",
  fontSize:"50px",
  }
  return (
    <div>
      <Form setCheck={setCheck} isChecked={isChecked} update ={update} vehicle={vehicle} pressed={pressed}/>
      <Buttons add={add} remove={remove} vehicle={vehicle} />
      <button style={myStyle}>{vehicle.length}</button>
      <ToastContainer />
    </div>
  );
}

export default App;
