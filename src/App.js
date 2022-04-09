import React from "react";
import Navbar from "./components/global/header/Navbar";
import ContactForm from "./components/page/ContactForm";
import "./assets/styles/index.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactForm />
    </div>
  );
}

export default App;
