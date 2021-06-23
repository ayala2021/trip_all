import React from 'react'
import { Avatar, Button, Card, CardActionArea, CardHeader, CardMedia } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './home.css'
import SignIn from './sign/signin';
import SignUp from './sign/signup';
import ButtonPlan from './button-plan';
import Plan from './plan';
import Result from './result';
import Email from './sign/email'
const Home = (props) => {
    return <div>
         <Router>
         <header className="head"><Link to="/login"><Button variant="outlined">התחברות</Button></Link> 
          <Link to="/signup"><Button variant="outlined">הצטרפות</Button></Link>
          </header>
          <footer className="end"><Link to="/"><Button variant="contained" color="primary">חזרה לדף הבית</Button></Link></footer>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/plan">
            <Plan/>
          </Route>
          <Route path="/result">
            <Result/>
          </Route>
          <Route path="">
            <ButtonPlan/>
          </Route>
        </Switch> 
       </Router> 
    </div>
}
export default Home