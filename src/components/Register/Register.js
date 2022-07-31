import React from 'react'
import Input from '../Login/Input'
import LabelOr from '../Login/LabelOr'
import LabelSignUp from './LabelSignUp'
import SocialIcons from '../Login/SocialIcons'
import CheckboxRegister from './CheckboxRegister'

const Register = () => {
  return (
    <div>
        <LabelSignUp/>
        <SocialIcons/>
        <LabelOr/>
        <Input title={'Name'} type={'text'} widthL={'8px'} widthR={'372px'}/>
        <Input title={'Username'} type={'text'} widthL={'8px'} widthR={'342px'}/>
        <Input title={'Email'} type={'text'} widthL={'8px'} widthR={'376px'}/>
        <Input title={'Password'} type={'password'} widthL={'8px'} widthR={'347px'}/>
        <Input title={'Repeat password'} type={'password'} widthL={'8px'} widthR={'292px'}/>
        <CheckboxRegister/>
    </div>
  )
}

export default Register