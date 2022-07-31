import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import 'bulma/css/bulma.min.css';

function Home() {
    const { state } = useLocation()
    console.log(state)
    return (
        <>
            <br />
            <h1 className="app-name">Gliding Sugar Cards</h1>
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
            <Navigation />
        </>
    );
}

export default Home