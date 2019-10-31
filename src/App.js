import React from 'react'
import { Route } from 'react-router-dom';

import Home from './components/Home';
import ChartsPage from './components/ChartsPage';

function App() {
    return (
        <div>
            <Route exact path='/' component={Home}/>
            
            <Route exact path='/charts-page' 
                render={(props) =>
                <ChartsPage {...props} />}
            />
        </div>
    )
}

export default App


