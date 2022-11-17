import React,{useState} from 'react'
import { toast } from 'react-toastify';
const Form  = (props) => {
    const submit=(event)=>{
        event.preventDefault();
        const x={ vehicleNo: document.getElementById('number').value, driverName:document.getElementById('name').value};
        if(props.pressed==="checked")
        {
        toast("successfully checked in!!");
        props.update(x);
      }
      else
      {
        const notFound = props.vehicle.find(obj => {
            return obj.vehicleNo === document.getElementById('number').value;
          });
          console.log(notFound);
        if(notFound!=undefined)
        {  console.log("yes");
            toast("successfully checked out!!")
            props.update(x);
        }
        else
        { console.log("no");
          toast("Given vehicle is not checked in");
        }
      }
    }
   const myStyle={
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
   }
   const textStyle={
    textAlign: "center",
  textTransform:" uppercase",
  color: "#0066A2",
  margin:"20px"
   }
   const submitStyle={
    background:" #0066A2",
	color: "white",
	borderStyle:" outset",
	borderColor: "#0066A2",
	height:" 50px",
	width: "100px",
	font:" bold15px arial,sans-serif",
	textShadow: "none",
  margin:"20px",
  align:"center",
   }
   const cancelStyle={
    background:"red",
    color: "white",
    borderStyle:" outset",
    borderColor: "red",
    height:" 50px",
    width: "100px",
    font:" bold15px arial,sans-serif",
    textShadow: "none",
    margin:"20px",
    align:"center",
   }
  return (
       props.isChecked && <form onSubmit={submit} style={{align:"center",borderColor:"#0066A2",borderStyle:" outset",margin:"20px",borderWidth:"10px"}} >
            <lable style={textStyle}><b>Vehicle Number</b></lable>
            <input required placeHolder="Enter vehicle number.."type="text" id="number" style={myStyle}></input>
            <label style={textStyle}><b>Driver Name</b></label>
            <input required placeHolder="Enter driver name..."type="text" id="name" style={myStyle}></input>
            <input type="submit" style={submitStyle}></input>
            <button onClick={()=>{
              props.setCheck(false);
            }} style={cancelStyle}>Cancel</button>
        </form>
  )
}

export default Form