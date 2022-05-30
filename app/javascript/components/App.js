import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <h1> Welcome to my app </h1> } />
          <Route path="/greeting" element={ <Greeting /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
