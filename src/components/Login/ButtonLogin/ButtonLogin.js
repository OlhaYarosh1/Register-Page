import React from 'react'
import classes from './ButtonLogin.module.css'


const ButtonLogin = () => {
    return (
        <div className={classes.buttonBox}>
            <button type='button' className={classes.toggleBtnLogin} autoFocus>
                LOGIN
            </button>
            <a href='./Register'>
                <button type='button' className={classes.toggleBtnRegister}>
                    REGISTER
                </button>
            </a>
        </div>
    )
}

export default ButtonLogin
