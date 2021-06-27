import Lang from "./context";
import Screen from "./Screen";
import translations from "./translations";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen></Screen>
    </Lang>
  );
}

export default App;
