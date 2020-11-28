/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useQuery } from "react-query";

export function CachedDataWhileLoading() {
  const [componentKey, setComponentKey] = useState(0);
  const remountComponent = () => {
    setComponentKey(componentKey + 1);
  };

  return (
    <InnerCachedDataWhileLoading
      key={componentKey}
      onClick={remountComponent}
    />
  );
}

export function InnerCachedDataWhileLoading(props: { onClick: () => void }) {
  const [index, setIndex] = useState(0);
  const [successCounter, setSuccessCounter] = useState(0);
  const incrementIndex = () => {
    setIndex(index + 1);
  };
  const decrementIndex = () => {
    setIndex(index - 1);
  };
  const queryResult = useQuery<string, Error>(
    ["cached-query", index],
    (name, index: number) => {
      return new Promise<string>((resolve) => {
        console.log("useQuery", name, index);
        setTimeout(() => {
          resolve("some-result " + index);
        }, 3000);
      });
    },
    {
      onSuccess: () => {
        setSuccessCounter(successCounter + 1);
      },
    }
  );

  return (
    <div>
      <p>CachedDataWhileLoading</p>
      <button onClick={props.onClick}>Remount</button>
      <br />
      <br />
      <button onClick={incrementIndex}>Inc!</button>{" "}
      <button onClick={decrementIndex}>Dec!</button>
      <br />
      <br />
      Counter: {index}
      <br />
      Result: {queryResult.data}
      <br />
      State: {queryResult.status}
      <br />
      isLoading: {queryResult.isLoading ? "loading" : "-"}
      <br />
      onSuccess callbacks: {successCounter}
    </div>
  );
}
