import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Campeonato from '../pages/Campeonato'
import Finalistas from '../pages/Finalistas'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact> <Campeonato/> </Route> 
                <Route path="/resultado" exact> <Finalistas/> </Route>                 
            </Switch>
        </Router>
    )
}

export default Routes