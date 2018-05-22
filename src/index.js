import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import './config'
import 'antd-mobile/dist/antd-mobile.css'
import App from './App';
import reducers from './reducer.js'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'

const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

// function Sec() {
//     return <h1>sec</h1>
// }

// function Third() {
//     return <h1>third</h1>
// }
// function ErrorPage() {
//     return <h1>404 Error</h1>
// }
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            
                
                <Switch>
                    {/*只渲染选中的第一个route*/}
                    <Route path='/login' exact component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard' ></Redirect>
                    {/* <Route path='/third' component={Third}></Route>
                    <Route path='/:location' component={ErrorPage}></Route> */}
                </Switch>

            
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);

