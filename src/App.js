import React from "react";

import Header from "./Components/UI/Header";
import Form from "./Components/Form/Form";
import "./App.css";

function App() {
  const entries = [];

  const saveEntryData = (enteredEntryData) => {
    const entryData = {
      ...enteredEntryData,
      id: Math.random().toString(),
    };

    entries.push(entryData);
    console.log(entries);
  };

  return (
    <div>
      <Header />
      <section className="content">
        <Form onSaveEntryData={saveEntryData} />
      </section>
    </div>
  );
}

export default App;
