import "./App.css";
import Header from "./components/Header/Header";
import ChoiceContainer from "./components/ChoiceContainer/ChoiceContainer";
import RulesButton from "./components/RulesButton/RulesButton";

function App() {
  return (
    <div className="App">
      <Header />
      <ChoiceContainer />
      <RulesButton />
    </div>
  );
}

export default App;
