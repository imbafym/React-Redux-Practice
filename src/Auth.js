import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './reducer.js/Auth.redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'





@connect(state => state.auth, { login,getUserData })
class Auth extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { data: {} }
    // }
    //没用redux的请求方法
    componentDidMount() {
    //     axios.get('/data').then(res => {
    //         if (res.status === 200)
    //             this.setState({ data: res.data[0] })
    //             console.log(res.data)
    //     })
        this.props.getUserData()
        
    }

    render() {


        return (
            <div>
                <h1>Hello, {this.props.user}, age is {this.props.age}</h1>
                {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
                <div>Auth Page You need login</div>
                <button onClick={this.props.login}>Login</button>
            </div>
        )
    }
}

export default Auth;