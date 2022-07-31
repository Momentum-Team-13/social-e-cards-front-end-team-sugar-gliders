import React from "react";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';

function Profile() {
    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <br />
            <Navigation />
            <br />
            <h1>profile</h1>
            <h3>username, email, image, date, ID, name</h3>
            <br />
            <div className="bottom-nav">
                <Navigation />
            </div>
            <br />
        </>
    );
}

export default Profile