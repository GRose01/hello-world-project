import React from 'react'
import ReactDOM from 'react-dom' 
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/home'

const App = () => {
    return (
        <Browser>
            <div>
                <Home />
            </div>
        </Browser>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
