import React from 'react'
import classes from './ButtonLogin.module.css'


const ButtonLogin = () => {
    function gotoLink(link) {
        console.log(link.value);
        window.open = link.value;
    }
    return (
        <div className={classes.buttonBox}>
            <button type='button' className={classes.toggleBtnLogin} autoFocus>
                LOGIN
            </button>
            <a href='http://localhost:3000/Register'>
            <button type='button' className={classes.toggleBtnRegister}>
                REGISTER
            </button>
            </a>
        </div>
    )
}

export default ButtonLogin
