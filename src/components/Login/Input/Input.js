import React from 'react'
import classes from './Input.module.css'

const Input = ({title, type, widthL, widthR}) => {
    const style = {"--width-left": widthL, "--width-right": widthR}
    return (
        <div className={classes.box}>
            <input className={classes.input} type={type} autoComplete="new-password" required></input>
            <div className={classes.grayBorder} style={style}></div>
            <div className={classes.blueBorder} style={style}></div>
            <div className={classes.placeholder}>{title}</div>
        </div>
    )
}

export default Input
