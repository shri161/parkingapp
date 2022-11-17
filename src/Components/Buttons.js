import React,{useState} from 'react'

const Buttons = (props) => {
  const myStyle = {
    display:" inline-block",
  padding:" 15px 25px",
  fontSize: "24px",
  cursor: "pointer",
  textAlign: "center",
  textDecoration:" none",
  outline:"none",
  color:" #fff",
  backgroundColor:" #0066A2",
  border: "none",
  borderRadius: "15px",
  boxShadow:" 0 9px #999",
  margin:"30px"
  }
  return (
    <div>
        <button onClick={props.add} style={myStyle}>CHECKIN</button>
        <button onClick={props.remove} style={myStyle}>CHECKOUT</button>
      <b> <p style={{textSize:"50px",color:"#0066A2",margin:"30px",fontSize:"30px"}}>TOTAL NUMBER OF VEHICLES IN THE PARKING</p></b>
    </div>
  )
  };

export default Buttons