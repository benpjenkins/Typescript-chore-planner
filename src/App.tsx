import React from "react";
import Header from "./components/Header";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
    </div>
  );
};

export default App;
