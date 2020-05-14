import React from "react";
import { Route } from "react-router-dom";

import UserListing from "./Components/UserListing";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={UserListing} />
      <Route path="/:uuid" render={(props) => <UserDetails {...props} />} />
    </div>
  );
}

export default App;
