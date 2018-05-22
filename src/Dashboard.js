import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import App from './App'
import { connect } from 'react-redux'
import { logout } from './reducer.js/Auth.redux'
function Sec() {
    return <h1>sec</h1>
}

function Third() {
    return <h1>third</h1>
}
function ErrorPage() {
    return <h1>404 Error</h1>
}
@connect(state => state.auth, { logout })
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (<div>
            {this.props.isAuth?<button onClick={this.props.logout}>logout</button>:null}
            <ul>
            <li>
                <Link to='/dashboard/'>Fisrt</Link>
            </li>
            <li>
                <Link to='/dashboard/sec'>Second</Link>
            </li>
            <li>
                <Link to='/dashboard/third'>Third</Link>
            </li>
            <Route path='/dashboard/' exact component={App}></Route>
            <Route path='/dashboard/sec' component={Sec}></Route>
            <Route path='/dashboard/third' component={Third}></Route>
        </ul></div>)

        return this.props.isAuth?app:redirectToLogin;
    }
}

export default Dashboard;