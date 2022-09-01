import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Heading } from "./components/ui/Heading";
import { Input } from "./components/ui/Input";


function App() {
  return (
    <div className="w-full bg-main min-h-screen">
      <Header />
      <div className="w-full p-8">
        <Heading text={"log in"} />
      </div>
      <div className="w-full p-8">
        <div className="w-full mb-4">
          <Input placeholder={"Email Address"} />
        </div>
        <div className="w-full mb-4">
          <Input placeholder={"Password"} />
        </div>
      </div>
    </div>
  );
}

export default App;
