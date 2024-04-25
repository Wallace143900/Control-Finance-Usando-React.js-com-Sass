import { useState } from "react";
import { EntriesList } from "./components/EntriesList";
import { Header } from "./components/Header/Header";
import { RegisterSection } from "./components/RegisterSection";
import { ResumeSection } from "./components/ResumeSection";
import "./styles/index.scss";

function App() {

  const [entries,setEntries] = useState([]);

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const [type, setType] = useState("Todos");

  return (
    <>
      <Header />
      <RegisterSection entries={entries} setEntries={setEntries}/>
      <ResumeSection setType={setType} setEntries={setEntries} />
      <EntriesList entries={entries} type={type} deleteEntry={deleteEntry} setEntries={setEntries} />
    </>
  )
}

export default App
