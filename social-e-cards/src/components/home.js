import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';

function Home() {
    const { state } = useLocation()
    const areYouLoggedIn = localStorage.getItem("log in")
    // const person = username
    console.log(state)

    // console.log(person)
    return (
        <div className="container">
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
            <h3 className="card-preview">See All Created Cards</h3>
            {/* preview of some cards
            button to navigate to all created cards  */}
            <br />
            {areYouLoggedIn ? (
                <>
                    <h3 className="card-preview">See All Cards from People you Follow</h3>
                    {/* preview of some cards
            button to navigate to all people you follow  */}
                    <br />
                    <h3 className="card-preview">See All Cards You've Created</h3>
                    {/* preview of some cards
            button to navigate to all cards you've created  */}
                    <br />
                </>
            ) : (
                " "
            )
            }
            {areYouLoggedIn ? (
                <>
                    <h1>hello</h1>
                </>
            ) : (
                <>
                    <h1>goodbye</h1>
                </>
            )}
            {/* <h1>Logged in as {person} </h1> */}
            <br />
            <Navigation />
            <br />
        </div>
    );
}

export default Home