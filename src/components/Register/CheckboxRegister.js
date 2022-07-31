import React from 'react'
import classes from './CheckboxRegister.module.css'

const CheckboxRegister = () => {
    return (
        <div>
            <div className={classes.formControlCheckReg}>
                <input type='checkbox'/>
                <label>I have read and agree to the terms</label>
            </div>
            <input type='submit' value='SIGN IN' className={classes.btn}/>
        </div>
    )
}

export default CheckboxRegister
