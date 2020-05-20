import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import MyList from './MyList';

const BasicRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/MyList" component={MyList}/>
        </Switch>
    </BrowserRouter>
)

export default BasicRouter;