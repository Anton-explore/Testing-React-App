import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import BigCommunity from "./components/BigCommunity";
import Subscribe from "./components/Subscribe";
import CommunityCard from "./components/CommunityCard";
import NotFound from "./components/NotFound";

const App = () => {
  const isNotFoundRoute = !!useRouteMatch("/not-found");
  return (
    <>
      {!isNotFoundRoute && (
        <ul className="nav-menu">
          <li className="nav-menu-link"><Link to="/">Home</Link></li>
          <li className="nav-menu-link"><Link to="/community">Community</Link></li>
        </ul>
      )}
      <Switch>
        <Route exact path="/community">
          <BigCommunity />
        </Route>
        <Route path="/community/:id">
          <CommunityCard />
        </Route>          
        <Route exact path="/">
          <Subscribe />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App;
