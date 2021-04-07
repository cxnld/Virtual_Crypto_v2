import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from './components/Content/Main';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Redirect from="/" to="/main" exact /> 
                    <Route path="/main" component={Main}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;