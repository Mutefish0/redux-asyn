import React from 'react'
import { connect } from 'react-redux'
import { LOGIN_ASYN } from '../actions'

//component
const App = ({ status, errorInfo, login }) => {
    let pwd
    let userName
    return(
        <div style={{textAlign:'center'}}>
            <span> status : {status} </span> <br/>
            <span style={{display:errorInfo?'inline':'none'}}>message : {errorInfo} </span> <br/>
            <input type="text" placeholder="username" ref={node => userName = node}/> <br/>
            <input type="password" placeholder="password" ref={node => pwd = node}/> <br/>
            <button onClick={()=>login(userName.value,pwd.value)}> Login </button>
        </div>
    )
}

//container
export default connect(
    state => ({
        status: state.login.status,
        errorInfo : state.login.error_info
    }),
    dispatch => ({
        login:(userName,pwd) => dispatch({...LOGIN_ASYN,userName,pwd})
    })
)(App)