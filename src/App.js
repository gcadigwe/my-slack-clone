import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="App__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router -> Chat Screen */}
      </div>
    </div>
  );
}

export default App;
