import './App.css';
import Homepage from "./Components/Homepage/Homepage";
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Explore from "./Components/Explore/Explore"
import Opensource from "./Components/Fields/Open-source/Opensource"
<<<<<<< HEAD
import Dsa from "./Components/Fields/DSA/Dsa"


=======
import WebDev from "./Components/Fields/web-dev/WebDev"
import Ai from "./Components/Fields/AI/Ai"
import Machinelearning from "./Components/Fields/ml/Machinelearning"
>>>>>>> 9056931a7c4c98e6a90401cdcbf24397e3b17e32

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
<<<<<<< HEAD
        <Route exact path='/Dsa' component={Dsa} />

=======
        <Route exact path='/WebDev' component={WebDev} />
        <Route exact path='/ai' component={Ai} />
        <Route exact path='/ml' component={Machinelearning} />
>>>>>>> 9056931a7c4c98e6a90401cdcbf24397e3b17e32
      </Switch>
    </Router>
    </>
  );
}

export default App;
