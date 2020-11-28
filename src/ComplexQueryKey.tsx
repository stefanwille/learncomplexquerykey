/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useQuery } from "react-query";

export function ComplexQueryKey() {
  const [counter, setCounter] = useState(0);
  const a = [1, 2, 3];
  const o = { area: "portfolio" };
  const queryKey = ["hello", "world", a, o];
  useQuery<string, Error>(queryKey, async (...queryKey: any[]) => {
    console.log("useQuery", queryKey);
    return "some-result";
  });

  return (
    <div>
      <p>ComplexQueryKey</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Render!
      </button>
      <br />
      <br />
      Counter: {counter}
    </div>
  );
}
