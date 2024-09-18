import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {};

  return (
    <div className="text-main-text bg-color-bg max-w-7xl h-screen bg-app-bg bg-no-repeat bg-[length:1280px_240px] bg-top">
      <section>
        <input
          type="search"
          name="profile"
          id=""
          onChange={handleChange}
          value={search}
        />
        <button>result</button>
      </section>
      <div>Profile info</div>
      <div>Repos</div>
    </div>
  );
}

export default App;
