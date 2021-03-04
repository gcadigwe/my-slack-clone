import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        {!user ? (
          <h1>LOGIN page</h1>
        ) : (
          <>
            {/* Header */}
            <Header />
            <div className="App__body">
              {/* Sidebar */}
              <Sidebar />
              {/* React-Router -> Chat Screen */}
              <Switch>
                <Route exact path="/room/:roomId" component={Chat} />
                <Route exact path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
