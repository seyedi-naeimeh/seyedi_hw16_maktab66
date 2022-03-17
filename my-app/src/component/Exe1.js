import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";

function Exe1() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  const [value1, setValue1] = useState("hi");
  const [value2, setValue2] = useState("bi");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null)

 
const memorizevalue1 = useCallback(()=>{
    setValue1(inputRef1.current.value)

},[value1])

const memorizevalue2 = useCallback(()=>{
    setValue2(inputRef2.current.value)

},[value2])

  return (
    <div>
      <div className="value-1">
        first value: <Title>{value1}</Title>
        <br />
        change first value:
        <input ref={inputRef1} type="text"/>
        <Button onClick={memorizevalue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input  ref={inputRef2} type="text"/>
        <Button onClick={memorizevalue2}> change </Button>
      </div>
    </div>
  );
}

export default Exe1;
