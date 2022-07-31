import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import "bulma/css/bulma.min.css";

function Home() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <h1>home page</h1>
      <Navigation />
    </>
  );
}

export default Home;
