import logo from './logo.svg';
import './App.css';
import Try from './components/not-need/try';
import Home from './components/home';
import { Route, Router, Switch, useHistory } from 'react-router';
import Plan from './components/plan';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './components/sign/signin';
import SignUp from './components/sign/signup';
import ButtonPlan from './components/button-plan';
import { Button } from '@material-ui/core';
import  Order from './components/order';

function App() {
  const history = useHistory();
  return (
      // <Home/>
      <div>
      <footer className="end"><Button variant="contained" color="primary" onClick={() => { history.push(`/`) }}>חזרה לדף הבית</Button></footer>
      <BrowserRouter>
  <Switch>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/plan" component={Plan}/>
    <Route path="/order" component={Order}/>
    <Route path="/" component={Home}/>
    
  </Switch>

  </BrowserRouter>
  </div>
  )
}

export default App;
