/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { PaginatedQuery } from "./PaginatedQuery";
import { CachedDataWhileLoading } from "./CachedDataWhileLoading";
import { ComplexQueryKey } from "./ComplexQueryKey";

function App() {
  return (
    <div className="App">
      <ComplexQueryKey />
      <hr />
      <CachedDataWhileLoading />
      <hr />
      <PaginatedQuery />
    </div>
  );
}

export default App;
