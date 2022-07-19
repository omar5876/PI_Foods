import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateRecipe from "./pages/CreateRecipe";
import DetailRecipe from "./pages/DetailRecipe";
import Home from "./pages/Home";
import InitialPage from "./pages/InitialPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <LandingPage>
        <Switch>
          <Route exact path={'/'}>
            <InitialPage/>
            </Route>
          <Route exact path={'/Home'}>
            <Navbar/>
            <Home/>
          </Route>
          <Route exact path={'/Details'}>
            <Navbar/>
            <DetailRecipe/>
          </Route>
          <Route exact path={'/Create'}>
            <Navbar/>
            <CreateRecipe/>
          </Route>
        </Switch>
      </LandingPage>
    </BrowserRouter>
  );
}

export default App;
