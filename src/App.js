import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { UserData } from "./component/UserData";
import { Start } from "./component/Start";
import Home from "./component/Home";
import { Footer } from "./component/Footer";
import { TV } from "./component/TV";
import { useHistory } from "react-router-dom";
import { Movies } from "./component/Movies";
import { Download } from "./component/Download";
import { More } from "./component/More";
import { Search } from "./component/Search";
import { Coming } from "./component/Coming";
import Mylist from "./component/Mylist";
import { Videoplay } from "./component/Videoplay";

function App() {
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStart(false); // After 10 seconds, hide the Sart component
    }, 3000);

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []); // Run only once on component mount

  return (
    <BrowserRouter>
      {showStart ? (
        <Start />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<UserData />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/download" element={<Download />} />
            <Route path="/more" element={<More />} />
            <Route path="/search" element={<Search />} />
            <Route path="/coming" element={<Coming />} />
            <Route path="/mylist" element={<Mylist />} />
            <Route path="/video/:id" element={<Videoplay />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
