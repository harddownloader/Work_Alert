import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Heading } from "./components/ui/Heading";
import { Input } from "./components/ui/Input";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="w-full bg-main min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="w-full h-full grid grid-cols-1 content-between">
        <div className="w-full">
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

        <Footer />
      </div>

    </div>
  );
}

export default App;
