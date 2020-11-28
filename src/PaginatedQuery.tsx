/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { usePaginatedQuery } from "react-query";

export function PaginatedQuery() {
  const [index, setIndex] = useState(0);
  const incrementIndex = () => {
    setIndex(index + 1);
  };
  const decrementIndex = () => {
    setIndex(index - 1);
  };
  const queryResult = usePaginatedQuery<string, Error>(
    ["paginated-query", index],
    (name, index: number) => {
      return new Promise<string>((resolve) => {
        console.log("useQuery", name, index);
        setTimeout(() => {
          resolve("some-result " + index);
        }, 3000);
      });
    }
  );

  return (
    <div>
      <p>PaginatedQuery</p>
      <button onClick={incrementIndex}>Inc!</button>{" "}
      <button onClick={decrementIndex}>Dec!</button>
      <br />
      <br />
      Counter: {index}
      <br />
      Result: {queryResult.data} {queryResult.status}
    </div>
  );
}
