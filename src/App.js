import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { addGun, removeGun, addGunAsync } from './reducer.js/reducer'

// const mapStatetoProps = (state) => {
//   return { num: state }
// }
// const actionCreator = { addGun, removeGun, addGunAsync }

@connect(//注解写法
//将state的东西放到props,自动连接action
  state=>({num:state.counter}),
  { addGun, removeGun, addGunAsync }
)
class App extends Component {
  
  render() {
    const num = this.props.num //这个num是从mapStatetoprop 获取的
    const addGun = this.props.addGun
    const addGunAsync = this.props.addGunAsync
    const removeGun = this.props.removeGun
    return (
      <div>
        <h1>now we have {num} guns</h1>
        <button onClick={addGun}>add Gun</button>
        <button onClick={removeGun}>remove Gun</button>
        <button onClick={addGunAsync}>add  Gun Async</button>
      </div>
    );
  }
}

export default App;
