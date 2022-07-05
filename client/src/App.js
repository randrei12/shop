import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Top from "./Top";
import Account from "./Account";
import Bookmarks from "./Bookmarks";
import Cart from './Cart';
import './css/main.css';

function App() {
    return (
        <Router>
            <Top />
            <Switch>
                <Route exact path="/account" element={<Account />} />
                <Route exact path="/bookmarks" element={<Bookmarks />} />
                <Route exact path="/cart" element={<Cart />} />
            </Switch>
        </Router>
    );
}

export default App;
