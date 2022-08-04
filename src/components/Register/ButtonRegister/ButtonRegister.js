import React from 'react'
import classes from '../../Login/ButtonLogin/ButtonLogin.module.css'

const ButtonRegister = () => {
    return (
        <div className={classes.buttonBox}>
            <a href='http://localhost:3000'>
            <button type='button' className={classes.toggleBtnLogin}>
                LOGIN
            </button>
            </a>
            <button type='button' className={classes.toggleBtnRegister} autoFocus>
                REGISTER
            </button>
        </div>
    )
}

export default ButtonRegister
