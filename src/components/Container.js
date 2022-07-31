import React from 'react'
import Checkbox from './Checkbox'
import RegistrationLink from './RegistrationLink'
import Input from './Input'
import classes from './Container.module.css'
import ButtonRegister from './ButtonRegister'

const Container = () => {
    return (
        <div className={classes.container}>
            <ButtonRegister/>
            <Input title={'Email address'} type={'text'} widthL={'8px'} widthR={'316px'}/>
            <Input title={'Password'} type={'password'} widthL={'8px'} widthR={'348px'}/>
            <Checkbox/>
            <RegistrationLink/>
        </div>
    )
}

export default Container
