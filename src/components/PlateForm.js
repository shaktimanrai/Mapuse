
import React, { useState } from 'react'

function PlateForm() {
  let data = 0;
  //const[data,setData]= useState(0);

  const Add = () => {

    //setData(data + 1);
    data++;
    console.log(data);

  };
  return (<>

    <h1>{data}</h1>


    <button onClick={Add}>Click me</button>

  </>

  )
}

export default PlateForm;

