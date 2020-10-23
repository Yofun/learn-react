import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {useWindowResize} from './hooks'

// -----------------自定义hooks--------------------
const Parent = () =>{
  const [count,setCount] = useState(0)
  const [width,height] = useWindowResize()


  return (
    <div>
      <h2>窗口宽高：{width} * {height}</h2>
      <p>count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>点我</button>
    </div>
  )
}

ReactDOM.render(<Parent />, document.getElementById("root"));