import React from 'react'
import classes from './Label.module.css'

const Label = ({title, margin}) => {
  const style = {"--margin": margin}
  return (
        <div className={classes.signIn}>{title}</div>
  )
}

export default Label
