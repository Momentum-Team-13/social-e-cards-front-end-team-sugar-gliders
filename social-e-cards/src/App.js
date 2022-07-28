import "./App.css";
import Navigation from "./components/navigation";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <h1>HELLO PEOPLE</h1>
      <Navigation areYouLoggedIn={true} />
      <Profile />
    </div>
  );
}

export default App;
