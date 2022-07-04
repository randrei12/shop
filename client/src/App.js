import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Top from "./Top"
import './css/main.css'

function App() {
  return (
    <Router>
      <Top />
    </Router>
  );
}

export default App;
