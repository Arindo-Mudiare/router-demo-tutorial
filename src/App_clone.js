import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Services,
  History,
  Location,
} from "./pages";
import Whoops404 from "./Whoops404";

function App() {
  const shouldRedirect = true;
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="services"
            element={
              shouldRedirect ? (
                <Navigate replace to="/about/services" />
              ) : (
                <About />
              )
            }
          />
          <Route path="/about" element={<About />}>
            <Route path="services" element={<Services />} />
            <Route path="history" element={<History />} />
            <Route path="location" element={<Location />} />
          </Route>
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
