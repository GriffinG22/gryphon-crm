import React, { useState } from "react";

import Header from "./Components/UI/Header";
import Form from "./Components/Form/Form";
import UserEntry from "./Components/Entries/UserEntry";
import Footer from "./Components/UI/Footer";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([
    {
      email: "luka@mavs.com",
      id: 1,
      name: "Luka Doncic",
      org: "Dallas Mavericks",
      phone: "123-456-7890",
      title: "Point Guard",
    },
    {
      email: "anthony@rhcp.com",
      id: 2,
      name: "Anthony Kiedis",
      org: "RHCP",
      phone: "321-456-7890",
      title: "Singer",
    },
    {
      email: "lex@podcast.com",
      id: 3,
      name: "Lex Freidman",
      org: "Lex Freidman Podcast",
      phone: "123-654-7890",
      title: "Podcast Host",
    },
  ]);

  const [page, setPage] = useState(1);

  const [entriesPerPage] = useState(4);

  const indexOfLastEntry = page * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);

  const saveEntryData = (enteredEntryData) => {
    const entryData = {
      ...enteredEntryData,
      id: +Math.random().toString(),
    };

    setEntries([entryData, ...entries]);
  };

  const nextBtnHandler = (e) => {
    if (entries.length / page < entriesPerPage) {
      return;
    }
    setPage(page + 1);
  };

  const backBtnHandler = (e) => {
    if (page < 2) {
      return;
    }
    setPage(page - 1);
  };

  return (
    <div>
      <Header />
      <section className="content">
        <Form onSaveEntryData={saveEntryData} />
        <div className="rendered_content">
          <div className="user_entries__container">
            {currentEntries.map((entry) => (
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
          <div className="pagination">
            <button
              onClick={backBtnHandler}
              className={`pagination-back ${page > 1 ? "" : "btn-hidden"}`}
            >
              Back
            </button>
            <button
              onClick={nextBtnHandler}
              className={`pagination-next ${
                entries.length / page > entriesPerPage ? "" : "btn-hidden"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
