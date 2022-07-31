import React from 'react'
import classes from './Checkbox.module.css'

const Checkbox = () => {
    return (
        <div>
            <div className={classes.formControlCheck}>
                <input type='checkbox'/>
                <label>Remember me</label>
                <a href='/'>Forgot password?</a>
            </div>
            <input type='submit' value='SIGN IN' className={classes.btn}/>
        </div>
    )
}

export default Checkbox
