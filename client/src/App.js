import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from './components/Main';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Main2 from "./components/Content/Main2";

function App() {

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Redirect from="/" to="/main" exact /> 
                    <Route path="/main" component={Main}/>
                    <Route path="/main2" component={Main2}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;