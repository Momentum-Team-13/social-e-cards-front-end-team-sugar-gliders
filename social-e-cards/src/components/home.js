import { useLocation } from "react-router-dom";
import Navigation from "./navigation";

function Home() {
    const { state } = useLocation()
    console.log(state)
    return (
        <>
            <h1>home page</h1>
            <Navigation />
        </>
    );
}

export default Home