/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useQuery } from "react-query";

export function ComplexQueryKey() {
  const [clickCount, setClickCount] = useState(0);
  const [queryCount, setQueryCount] = useState(0);
  const anArray = [1, 2, 3];
  const anObject = { area: "portfolio" };
  const queryKey = ["complex-query-key", anArray, anObject];
  useQuery<string, Error>(
    queryKey,
    async (name, index) => {
      setQueryCount(queryCount + 1);
      console.log("useQuery", name, index);
      return "some-result";
    },
    { refetchOnWindowFocus: false }
  );

  return (
    <div>
      <p>ComplexQueryKey</p>
      <button
        onClick={() => {
          setClickCount(clickCount + 1);
        }}
      >
        Render!
      </button>
      <br />
      <br />
      Click Count: {clickCount}
      <br />
      Query Count: {queryCount}
      <br />
    </div>
  );
}
