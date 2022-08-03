import React from 'react'
import classes from './RegisterFooter.module.css'

const CheckboxRegister = () => {
    return (
        <>
            <input className={classes.checkbox} type='checkbox'/>
            <div className={classes.circle}></div>
            <div className={classes.label}>I have read and agree to the terms</div>
            <input type='submit' value='SIGN IN' className={classes.btn}/>
        </>
    )
}

export default CheckboxRegister
