import React from 'react'
import classes from './SocialIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
    return (
        <div className={classes.socialIcons}>
            <a href='/'><FontAwesomeIcon className={classes.img} icon={faFacebookF}/></a>
            <a href='/'><FontAwesomeIcon className={classes.img} icon={faGoogle}/></a>
            <a href='/'><FontAwesomeIcon className={classes.img} icon={faTwitter}/></a>
            <a href='/'><FontAwesomeIcon className={classes.img} icon={faGithub}/></a>
        </div>
    )
}

export default SocialIcons
