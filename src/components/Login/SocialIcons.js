import React from 'react'
import classes from './SocialIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
  return (
    <div>
        <div className={classes.socialIcons}>
        <FontAwesomeIcon className={classes.img} icon={faFacebookF}/>
        <FontAwesomeIcon className={classes.img} icon={faGoogle}/>
        <FontAwesomeIcon className={classes.img} icon={faTwitter}/>
        <FontAwesomeIcon className={classes.img} icon={faGithub}/>
        </div>
    </div>
  )
}

export default SocialIcons