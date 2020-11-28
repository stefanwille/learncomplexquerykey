/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useQuery } from "react-query";

export function CachedDataWhileLoading() {
  const [index, setIndex] = useState(0);
  const incrementIndex = () => {
    setIndex(index + 1);
  };
  const decrementIndex = () => {
    setIndex(index - 1);
  };
  const queryResult = useQuery<string, Error>(
    ["cached-query", index],
    (_, index: number) => {
      return new Promise<string>((resolve) => {
        console.log("useQuery", index);
        setTimeout(() => {
          resolve("some-result " + index);
        }, 3000);
      });
    }
  );

  return (
    <div>
      <p>CachedDataWhileLoading</p>
      <button onClick={incrementIndex}>Inc!</button>{" "}
      <button onClick={decrementIndex}>Dec!</button>
      <br />
      <br />
      Counter: {index}
      <br />
      Result: {queryResult.data} {queryResult.isLoading ? "loading" : "success"}
    </div>
  );
}
