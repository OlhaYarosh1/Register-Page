import React from 'react'
import Login from './Login/Login'
import classes from './Container.module.css'
import Register from './Register/Register'


const Container = () => {
    return (
        <div className={classes.container}>
            <Login/>
            <Register/>
        </div>
    )
}

export default Container
