import React from 'react'
import classes from './SocialIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
  return (
        <div className={classes.socialIcons}>
        <FontAwesomeIcon className={classes.img} icon={faFacebookF}/>
        <FontAwesomeIcon className={classes.img} icon={faGoogle}/>
        <FontAwesomeIcon className={classes.img} icon={faTwitter}/>
        <FontAwesomeIcon className={classes.img} icon={faGithub}/>
        </div>
  )
}

export default SocialIcons