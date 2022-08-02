import React from 'react'
import classes from './RegisterFooter.module.css'

const CheckboxRegister = () => {
    return (
        <>
            <div className={classes.formControlCheckReg}>
                <input type='checkbox'/>
                <label>I have read and agree to the terms</label>
            </div>
            <input type='submit' value='SIGN IN' className={classes.btn}/>
        </>
    )
}

export default CheckboxRegister
