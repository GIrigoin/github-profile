import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="text-main-text bg-color-bg max-w-7xl h-screen bg-app-bg bg-no-repeat bg-[length:1280px_240px] bg-top">
      <SearchBar />
      <div>Profile info</div>
      <div>Repos</div>
    </div>
  );
}

export default App;
