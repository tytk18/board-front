import { useEffect, useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.number);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <p style={{ fontSize: "2rem" }}>
        {count} {props.title}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ fontSize: "2rem" }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        style={{ fontSize: "2rem" }}
      >
        -
      </button>
    </div>
  );
}
