import React from 'react'
import ButtonRegister from './ButtonRegister/ButtonRegister'
import SocialIcons from './SocialIcons/SocialIcons'
import Label from './Label/Label'
import Input from './Input/Input'
import LoginFooter from './LoginFooter/LoginFooter'
import RegistrationLink from './RegistrationLink/RegistrationLink'
import classes from './Login.module.css'

const Login = () => {
    return (
        <>
            <ButtonRegister/>
            <div className={classes.formBox}>
                <Label title={'Sign in with:'} margin={'20px auto'}/>
                <SocialIcons/>
                <Label title={'or:'} margin={'10px auto'}/>
                <Input title={'Email address'} type={'text'} widthL={'8px'} widthR={'316px'}/>
                <Input title={'Password'} type={'password'} widthL={'8px'} widthR={'348px'}/>
                <LoginFooter/>
                <RegistrationLink/>
            </div>
        </>
    )
}

export default Login
