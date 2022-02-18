import React from "react";
import { useState } from "react";

export function Component1() {
  return "I'm component from day2";
}
export function Component2() {
  function btn() {
    alert("Hello");
  }
  return (
    <div>
      <button onClick={btn}>Click Here</button>
    </div>
  );
}
let initialState = 1;
export function Component3() {
  const [state, setState] = useState(initialState);
  function inc() {
    setState(state + 2);
    //state += 1; //Don't do this {don't mutate/change state directly,always use setState instead}
  }
  return (
    <div>
      {state}
      <button onClick={inc}>IncState</button>
    </div>
  );
}

export function Component4() {
  const [state, setState] = useState(initialState);
  //Easy method using inline function
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 3)}>IncState2</button>
    </div>
  );
}

export function Component5() {
  return <div></div>;
}
