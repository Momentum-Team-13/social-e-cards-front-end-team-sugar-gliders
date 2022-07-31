import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';

function Home(areYouLoggedIn) {
    const { state } = useLocation()
    // const person = username
    console.log(state)
    // console.log(person)
    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
            <br />
            <Navigation />
            <br />
            <h3 className="card-preview">See All Created Cards</h3>
            {/* preview of some cards
            button to navigate to all created cards  */}
            <br />
            {state ? (
                <div>
                    <h3 className="card-preview">See All Cards from People you Follow</h3>
                    {/* preview of some cards
            button to navigate to all people you follow  */}
                    <br />
                    <h3 className="card-preview">See All Cards You've Created</h3>
                    {/* preview of some cards
            button to navigate to all cards you've created  */}
                    <br />
                </div>
            ) : (
                " "
            )
            }
            {state ? (
                <div>
                    <h1>hello</h1>
                </div>
            ) : (
                <div>
                    <h1>goodbye</h1>
                </div>
            )}
            {/* <h1>Logged in as {person} </h1> */}
        </>
    );
}

export default Home