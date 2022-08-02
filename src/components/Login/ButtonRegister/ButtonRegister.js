import React from 'react'
import classes from './ButtonRegister.module.css'

const ButtonRegister = () => {
    return (
        <div className={classes.buttonBox}>
            <button type='button' className={classes.toggleBtnLogin}>
                LOGIN
            </button>
            <button type='button' className={classes.toggleBtnRegister}>
                REGISTER
            </button>
        </div>
    )
}

export default ButtonRegister
