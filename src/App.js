import './App.css';
import Homepage from "./Components/Homepage/Homepage";
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Explore from "./Components/Explore/Explore"

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Explore' component={Explore} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
