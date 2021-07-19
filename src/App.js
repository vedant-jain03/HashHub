import './App.css';
import React, { lazy, Suspense, useState, useEffect } from "react";
import { HashRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import { usercontext } from "./Components/Contexts/usercontext"
import { currentBlog } from "./Components/Contexts/currentBlog"
import Preloader from "./Components/Preloader/Preloader"
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import DehazeIcon from '@material-ui/icons/Dehaze';

const Homepage = lazy(() => import("./Components/Homepage/Homepage"));
const Explore = lazy(() => import("./Components/Explore/Explore"));
const Opensource = lazy(() => import("./Components/Fields/Open-source/Opensource"));
const Ai = lazy(() => import("./Components/Fields/AI/Ai"));
const Machinelearning = lazy(() => import("./Components/Fields/ml/Machinelearning"));
const Profile_Readme = lazy(() => import("./Components/Tools/Github_Profile_Readme_Generator/Inputfield"))
const Certificate_Generator = lazy(() => import("./Components/Tools/Certificate Generator/Component/Homepage"))
const smart_pdf = lazy(() => import("./Components/Tools/Smart Pdf/component/Homepage"))
const markdown_gen = lazy(() => import("./Components/Tools/Github Markdown Generator/Homepage"))
const resume_maker = lazy(() => import("./Components/Tools/Resume Maker/Homepage"))
const Login = lazy(() => import('./Components/Forms/Login'));
const Register = lazy(() => import('./Components/Forms/Register'))
const Blogs = lazy(() => import('./Components/Blog-MVP/Homepage'))
const CreateBlog = lazy(() => import('./Components/Blog-MVP/Bloginput'))
const Blogpage = lazy(() => import('./Components/Blog-MVP/Blogpage'))
const UserProfile = lazy(() => import('./Components/Blog-MVP/Userprofile'))

function App() {
  const history = useHistory();
  const [currentactivePage, setcurrentactivePage] = useState("home");
  const [userexist, setuserexist] = useState(false);
  const [user, setuser] = useState([])
  const [currentindexblog, setcurrentblog] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setuser(JSON.parse(localStorage.getItem('user')));
    }
    if (localStorage.getItem('userexist')==='true') {
      setuserexist(true)
    } else{
      setuserexist(false);
    }
  }, [localStorage.getItem('user')]);
  return (
    <>
      {
        userexist === true ?
          <>

            <Suspense fallback={<Preloader />}>
              <div id="main-nav-bar">
                <div>
                <Link to="">Hash/Hub</Link>
                </div>
                
                <nav id="nav-menu">
                  <Link className={currentactivePage === "home" ? 'active' : ''} onClick={() => setcurrentactivePage('home')} to="/"> <HomeIcon style={{ marginRight: '5px' }} /> Home</Link>
                  <Link className={currentactivePage === "Explore" ? 'active' : ''} onClick={() => setcurrentactivePage('Explore')} to="/Explore"> <ExploreIcon style={{ marginRight: '5px' }} /> Explore</Link>
                  <Link className={currentactivePage === "Blogs" ? 'active' : ''} onClick={() => setcurrentactivePage('Blogs')} to="/Blogs"><AccountBalanceWalletIcon style={{ marginRight: '5px' }} /> Blogs</Link>
                  <a href="https://github.com/vedant-jain03/HashHub"> <GitHubIcon style={{ marginRight: '5px' }} /> Contribute</a>
                </nav>
                {
                  userexist === true ?
                    <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => history.push('/userprofile')} className="user" >
                      <AccountCircleIcon style={{ cursor: 'pointer', color: 'white' }} />

                      <span style={{ fontWeight: '600', color: 'white' }}>{user.name}</span>
                      <button id="login_logout_tackle" onClick={() => {
                        {
                          localStorage.setItem('userexist','false')
                          setuserexist(false)
                        };
                      }} style={{ marginLeft: '1rem' }} >Logout</button>
                    </div> :
                    <button id="login_logout_tackle" onClick={() => {
                      { history.push('/') };
                    }}>Login</button>
                }
              </div>
              <Router>
                <Switch>
                  <usercontext.Provider value={{ user, setuser, userexist, setuserexist }} >
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/Explore' component={Explore} />
                    <Route exact path='/Opensource' component={Opensource} />
                    <Route exact path='/ai' component={Ai} />
                    <Route exact path='/ml' component={Machinelearning} />
                    <Route exact path='/github_profile_readme' component={Profile_Readme} />
                    <Route exact path='/certificate_generator' component={Certificate_Generator} />
                    <Route exact path='/Smart_pdf' component={smart_pdf} />
                    <Route exact path='/markdown_generator' component={markdown_gen} />
                    <Route exact path='/resume_maker' component={resume_maker} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <currentBlog.Provider value={{ currentindexblog, setcurrentblog }}>
                      <Route exact path='/Blogs' component={Blogs} />
                      <Route exact path='/CreateBlog' component={CreateBlog} />
                      <Route exact path='/Blogpage' component={Blogpage} />
                      <Route exact path='/userprofile' component={UserProfile} />
                    </currentBlog.Provider>
                  </usercontext.Provider>
                </Switch>
              </Router>
            </Suspense>
          </>
          :
          <Suspense fallback={<Preloader />}>
            <Router>
              <Switch>
                <usercontext.Provider value={{ user, setuser, userexist, setuserexist }} >

                  <Route exact path='/' component={Login} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/Explore' component={Login} />
                  <Route exact path='/Opensource' component={Login} />
                  <Route exact path='/ai' component={Login} />
                  <Route exact path='/ml' component={Login} />
                  <Route exact path='/github_profile_readme' component={Login} />
                  <Route exact path='/certificate_generator' component={Login} />
                  <Route exact path='/Smart_pdf' component={Login} />
                  <Route exact path='/markdown_generator' component={Login} />
                  <Route exact path='/resume_maker' component={Login} />
                  <Route exact path='/Blogs' component={Login} />
                  <Route exact path='/CreateBlog' component={Login} />
                  <Route exact path='/Blogpage' component={Login} />
                  <Route exact path='/userprofile' component={Login} />
                </usercontext.Provider>
              </Switch>
            </Router>
          </Suspense>
      }
    </>
  );
}

export default App;