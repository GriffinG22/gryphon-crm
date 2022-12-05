import React from "react";

import Header from "./Components/UI/Header";
import Form from "./Components/Form/Form";
import Footer from "./Components/UI/Footer";
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
        <div className="user_entries__container">entries rendered here</div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
