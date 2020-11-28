/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useQuery, useQueryCache } from "react-query";

export function PrefetchQuery() {
  const [index, setIndex] = useState(0);
  const [successCounter, setSuccessCounter] = useState(0);
  const incrementIndex = () => {
    setIndex(index + 1);
  };
  const decrementIndex = () => {
    setIndex(index - 1);
  };

  const queryFn = (name: string, index: number) => {
    return new Promise<string>((resolve) => {
      console.log("useQuery", name, index);
      setTimeout(() => {
        resolve("some-result " + index);
      }, 3000);
    });
  };

  const queryCache = useQueryCache();
  const [precacheState, setPrecacheState] = useState("--");
  useEffect(() => {
    setPrecacheState("Precaching");
    queryCache.fetchQuery(["prefetch-query", 0], queryFn);
    queryCache.fetchQuery(["prefetch-query", 1], queryFn);
    queryCache.fetchQuery(["prefetch-query", 2], queryFn);
    queryCache.fetchQuery(["prefetch-query", 3], queryFn);
    queryCache.fetchQuery(["prefetch-query", 4], queryFn);
    queryCache.fetchQuery(["prefetch-query", 5], queryFn).then(() => {
      setPrecacheState("Done precaching");
    });
  }, [queryCache]);

  const queryResult = useQuery<string, Error>(
    ["prefetch-query", index],
    queryFn,
    {
      onSuccess: () => {
        setSuccessCounter(successCounter + 1);
      },
    }
  );

  return (
    <div>
      <p>PrefetchQuery</p>
      <button onClick={incrementIndex}>Inc!</button>{" "}
      <button onClick={decrementIndex}>Dec!</button>
      <br />
      <br />
      Counter: {index}
      <br />
      PrecacheState: {precacheState}
      <br />
      Result: {queryResult.data}
      <br />
      State: {queryResult.status}
      <br />
      onSuccess callbacks: {successCounter}
    </div>
  );
}
