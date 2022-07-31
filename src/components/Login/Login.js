import React from 'react'
import ButtonRegister from './ButtonRegister'
import LabelSign from './LabelSign'
import SocialIcons from './SocialIcons'
import LabelOr from './LabelOr'
import Input from './Input'
import Checkbox from './Checkbox'
import RegistrationLink from './RegistrationLink'

const Login = () => {
  return (
    <div>
            <ButtonRegister/>
            <LabelSign/>
            <SocialIcons/>
            <LabelOr/>
            <Input title={'Email address'} type={'text'} widthL={'8px'} widthR={'316px'}/>
            <Input title={'Password'} type={'password'} widthL={'8px'} widthR={'348px'}/>
            <Checkbox/>
            <RegistrationLink/>
    </div>
  )
}

export default Login