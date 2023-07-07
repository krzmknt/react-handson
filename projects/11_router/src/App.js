import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  Services,
  History,
  Location,
} from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="services" element={<Services />} />
            <Route path="history" element={<History />} />
            <Route path="arisa" element={<Location />} />
          </Route>
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
