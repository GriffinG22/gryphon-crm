import React from "react";

import Header from "./Components/UI/Header";
import Form from "./Components/Form/Form";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <section className="content">
        <Form />
      </section>
    </div>
  );
}

export default App;
