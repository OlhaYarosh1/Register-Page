import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
const SignInOut=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:430,margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={0} style={paperStyle}>
        <Tabs onChange={handleChange}>
          <Tab label="LOGIN" />
          <Tab label="REGISTER" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Register/>
      </TabPanel>
      </Paper>
    )
}

export default SignInOut;