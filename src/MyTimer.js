import { useState, useEffect } from "react";

export default function Timer() {

  console.log("Timer rendered!");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(timer);    
  }, []);

  return <h1> {count} times!</h1>;
}