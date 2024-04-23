import { EntriesList } from "./components/EntriesList";
import { Header } from "./components/Header/Header";
import { RegisterSection } from "./components/RegisterSection";
import { ResumeSection } from "./components/ResumeSection";
import "./styles/index.scss";

function App() {

  return (
    <>
      <Header />
      <RegisterSection />
      <ResumeSection />
      <EntriesList />
    </>
  )
}

export default App
