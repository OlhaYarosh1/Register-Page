import React from 'react'
import classes from './ButtonLogin.module.css'

const ButtonLogin = () => {
    return (
        <div className={classes.buttonBox}>
            <button type='button' className={classes.toggleBtnLogin} autoFocus>
                LOGIN
            </button>
            <button type='button' className={classes.toggleBtnRegister}>
                REGISTER
            </button>
        </div>
    )
}

export default ButtonLogin
