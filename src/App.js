import './App.css';
import Homepage from "./Components/Homepage/Homepage";
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Explore from "./Components/Explore/Explore"
import Opensource from "./Components/Fields/Open-source/Opensource"
import WebDev from "./Components/Fields/web-dev/WebDev"
import Ai from "./Components/Fields/AI/Ai"
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/#/' component={Homepage} />
        <Route exact path='/Homepage' component={Homepage} />
        <Route exact path='/Explore' component={Explore} />
        <Route exact path='/Opensource' component={Opensource} />
        <Route exact path='/WebDev' component={WebDev} />
        <Route exact path='/ai' component={Ai} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
