import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Pages from './pages';


function App() {

    return (
        <BrowserRouter>
            <Pages />
            {/* <Navigation baseURL={baseURL} areYouLoggedIn={false} /> */}
        </BrowserRouter>
    );
}

export default App;


// if not logged in 
// if !token, return navigate to ="/login"