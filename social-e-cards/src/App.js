import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Pages from './pages';
import 'bulma/css/bulma.min.css';


function App() {
    let baseURL = 'https://sg-ecard-api.herokuapp.com'
    return (
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    );
}
export default App;
