import React from 'react'
import classes from './LoginFooter.module.css'

const LoginFooter = () => {
    return (
        <>
            <input type='checkbox' className={classes.checkBox}/>
            <div className={classes.circle}></div>
            <div className={classes.forgotPassword}>
                <a href='/'>Forgot password?</a>
                <div className={classes.label}>Remember me</div>
            </div>
            <footer>
                <input type='submit' value='SIGN IN' className={classes.btn}/>
                <p>Not a member?&nbsp;
                    <a href='/Register'>Register</a>
                </p>
            </footer>
        </>
    )
}

export default LoginFooter
