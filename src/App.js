import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './main'
import Pricing from './routes/pricing'
import About from './routes/about'
import How from './routes/how'
import Login from './routes/login'
import MailingList from "./routes/mailingList";
import Register from './routes/register'
import BuildRedirect from "./routes/err/build";
import Maintenance from "./routes/err/maintain";
import Dashboard from "./routes/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/pricing" element={<BuildRedirect />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/how-it-works" element={<BuildRedirect />} />
        <Route exact path="/mailingList" element={<MailingList />} />
        <Route exact path="/registration" element={<BuildRedirect />} />
        <Route exact path="/maintanence" element={<Maintenance />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
