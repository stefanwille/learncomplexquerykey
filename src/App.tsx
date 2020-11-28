/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { PaginatedQuery } from "./PaginatedQuery";
import { CachedDataWhileLoading } from "./CachedDataWhileLoading";
import { ComplexQueryKey } from "./ComplexQueryKey";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComplexQueryKey />
        <div style={{ width: "70vw" }}>
          <hr />
        </div>
        <CachedDataWhileLoading />
        <div style={{ width: "70vw" }}>
          <hr />
        </div>
        <PaginatedQuery />
      </header>
    </div>
  );
}

export default App;
