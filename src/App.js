import React, { useState } from "react";

import Header from "./Components/UI/Header";
import Form from "./Components/Form/Form";
import UserEntry from "./Components/Entries/UserEntry";
import Footer from "./Components/UI/Footer";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([
    {
      email: "joe@test.com",
      id: 1,
      name: "Joe Thomas",
      org: "Test Co.",
      phone: "123-456-7890",
      title: "CEO",
    },
    {
      email: "sam@test.com",
      id: 2,
      name: "Sam Smith",
      org: "Test Co.",
      phone: "321-456-7890",
      title: "COO",
    },
    {
      email: "lex@test.com",
      id: 3,
      name: "Lex Freidman",
      org: "Test Co.",
      phone: "123-654-7890",
      title: "Host",
    },
  ]);

  const [page, setPage] = useState(1);

  const saveEntryData = (enteredEntryData) => {
    const entryData = {
      ...enteredEntryData,
      id: +Math.random().toString(),
    };

    setEntries([entryData, ...entries]);
    console.log(entries);
  };

  return (
    <div>
      <Header />
      <section className="content">
        <Form onSaveEntryData={saveEntryData} />
        <div className="rendered_content">
          <div className="user_entries__container">
            {entries.slice(0,4).map((entry) => (
              <UserEntry
                key={entry.id}
                email={entry.email}
                org={entry.org}
                name={entry.name}
                phone={entry.phone}
                title={entry.title}
              />
            ))}
          </div>
          <div className="pagination">btn . . . btn</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
