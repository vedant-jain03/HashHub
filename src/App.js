import './App.css';
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import Dsa from "./Components/Fields/DSA/Dsa"
import Preloader from "./Components/Preloader/Preloader"

const Homepage = lazy(() => import("./Components/Homepage/Homepage"));
const Explore = lazy(() => import("./Components/Explore/Explore"));
const Opensource = lazy(() => import("./Components/Fields/Open-source/Opensource"));
const WebDev = lazy(() => import("./Components/Fields/web-dev/WebDev"));
const Ai = lazy(() => import("./Components/Fields/AI/Ai"));
const Machinelearning = lazy(() => import("./Components/Fields/ml/Machinelearning"));
const Profile_Readme=lazy(()=>import("./Components/Tools/Github_Profile_Readme_Generator/Inputfield"))
const Certificate_Generator=lazy(()=>import("./Components/Tools/Certificate Generator/Component/Homepage"))
const smart_pdf=lazy(()=>import("./Components/Tools/Smart Pdf/component/Homepage"))
const markdown_gen=lazy(()=>import("./Components/Tools/Github Markdown Generator/Homepage"))
const resume_maker=lazy(()=>import("./Components/Tools/Resume Maker/Homepage"))
function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/#/' component={Homepage} />
            <Route exact path='/Homepage' component={Homepage} />
            <Route exact path='/Explore' component={Explore} />
            <Route exact path='/Opensource' component={Opensource} />
            <Route exact path='/WebDev' component={WebDev} />
            <Route exact path='/ai' component={Ai} />
            <Route exact path='/ml' component={Machinelearning} />
            <Route exact path='/github_profile_readme' component={Profile_Readme} />
            <Route exact path='/certificate_generator' component={Certificate_Generator} />
            <Route exact path='/Smart_pdf' component={smart_pdf} />
            <Route exact path='/markdown_generator' component={markdown_gen} />
            <Route exact path='/resume_maker' component={resume_maker} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;