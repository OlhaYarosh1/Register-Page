import React from 'react'
import classes from './ButtonRegister.module.css'

const ButtonRegister = () => {
    return (
        <div className={classes.buttonBox}>
                <button type='button' className={classes.toggleBtnLogin} onclick='login()'>LOGIN</button>
                <button type='button' className={classes.toggleBtnRegister} onclick='register()'>REGISTER</button>
        </div>
    )
}

export default ButtonRegister
