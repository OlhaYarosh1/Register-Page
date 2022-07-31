import React from 'react'
import classes from './RegistrationLink.module.css'

const RegistrationLink = () => {
    return (
        <footer className={classes.footer}>
            <p>Not a member?&nbsp;
                <a href='/Register'>Register</a>
            </p>
        </footer>
    )
}

export default RegistrationLink
