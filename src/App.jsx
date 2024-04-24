import { useState } from "react";
import { EntriesList } from "./components/EntriesList";
import { Header } from "./components/Header/Header";
import { RegisterSection } from "./components/RegisterSection";
import { ResumeSection } from "./components/ResumeSection";
import "./styles/index.scss";

function App() {

  const [entries,setEntries] = useState([
    {
    id: crypto.randomUUID(),
    value: 90.0,
    categoryID: 0
    },
    {
      id: crypto.randomUUID(),
      value: 40.0,
      categoryID: 1
    },
    {
        id: crypto.randomUUID(),
        value: 15.5,
        categoryID: 0
    }
  ]);

  const [type, setType] = useState("Todos");

  return (
    <>
      <Header />
      <RegisterSection entries={entries} setEntries={setEntries}/>
      <ResumeSection setType={setType} setEntries={setEntries} />
      <EntriesList entries={entries} type={type}/>
    </>
  )
}

export default App
