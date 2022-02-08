import "./App.css";
import RulesModal from "./components/RulesModal/RulesModal";
import SymbolElement from "./components/SymbolElement/SymbolElement";

function App() {
  return (
    <div className="App">
      <RulesModal />
      <SymbolElement type='paper'/>
    </div>
  );
}

export default App;
