import React from 'react'
import Input from '../Login/Input/Input'
import Label from '../Login/Label/Label'
import SocialIcons from '../Login/SocialIcons/SocialIcons'
import RegisterFooter from './RegisterFooter/RegisterFooter'
import classes from '../Login/Login.module.css'

const Register = () => {
    return (
        <div className={classes.formBox}>
            <Label title={'Sign up with:'} margin={'20px auto'}/>
            <SocialIcons/>
            <Label title={'or:'} margin={'10px auto'}/>
            <Input title={'Name'} type={'text'} widthL={'8px'} widthR={'372px'}/>
            <Input title={'Username'} type={'text'} widthL={'8px'} widthR={'342px'}/>
            <Input title={'Email'} type={'text'} widthL={'8px'} widthR={'376px'}/>
            <Input title={'Password'} type={'password'} widthL={'8px'} widthR={'347px'}/>
            <Input title={'Repeat password'} type={'password'} widthL={'8px'} widthR={'292px'}/>
            <RegisterFooter/>
        </div>
    )
}

export default Register
