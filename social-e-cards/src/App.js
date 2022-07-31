import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Pages from './pages';
import 'bulma/css/bulma.min.css';
import "./App.css";


function App(state) {

    return (
        <BrowserRouter>
            <Pages state={state} />
        </BrowserRouter>
    );
}
export default App;
