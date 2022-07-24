import "./App.css";
import { Navbar } from "./components/Navbar";
import { Headers } from "./components/Headers";
import { Mains } from "./components/Mains";
import { Footers } from "./components/Footers";
import "./style/style.css";
function App() {
  return (
    <div>
      <Navbar />
      <Headers />
      <Mains />
      <Footers />
    </div>
  );
}

export default App;
