import React from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddGame from './AddGame';
import Home from './Home';

export const Navbar = () => {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky">
  <div className="container">
    <Link className="navbar-brand font-weight-bold font-italic" to="/">Games App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item " >
          <Link className="nav-link" to="/Games" ><i class="fas fa-gamepad"></i> Games</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Games" ><i class="fas fa-star"></i> Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Games" ><i class="fas fa-inbox"></i> Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addGame"  ><i class="fas fa-plus-circle"></i> Add Game</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
<Switch>
          
          <Route path="/addGame">
            <AddGame />
          </Route>
          <Route path="/Games">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
</Router>
    )
}
export default Navbar;