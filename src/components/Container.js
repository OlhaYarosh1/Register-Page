import React from 'react'
import Login from './Login/Login'
import classes from './Container.module.css'
import Register from './Register/Register'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

const Container = () => {
    return (
        <Router>
        <div className={classes.container}>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
            </Routes>
        </div>
        </Router>
    )
}

export default Container
