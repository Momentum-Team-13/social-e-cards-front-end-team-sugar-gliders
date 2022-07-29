import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Pages from './pages';
import Navigation from "./components/navigation";


function App() {

    return (
        <BrowserRouter>
            <Pages />

        </BrowserRouter>
    );
}
export default App;
