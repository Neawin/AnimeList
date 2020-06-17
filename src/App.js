import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import "./App.css";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import Navbar from "./components/Home/Navbar";
import Anticipated from "./components/Anticipated/Anticipated";
import Highest from "./components/Highest/Highest";
import Animes from "./components/Animes/Animes";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/popular/:page"
              render={(props) => <Popular {...props} />}
            />
            <Route
              path="/anticipated/:page"
              render={(props) => <Anticipated {...props} />}
            />
            <Route
              path="/highest/:page"
              render={(props) => <Highest {...props} />}
            />
            <Route
              path="/animes/:id"
              render={(props) => <Animes {...props} />}
            />
          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
