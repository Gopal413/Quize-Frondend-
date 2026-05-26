import { Button, Paper, useTheme } from '@mui/material'
import React from 'react'
import {CustomTextField, PrimaryButton,PrimaryText} from '../Components/Styled/PrimaryButton'
// import Theme from '../Themes/Theme'

function Home() {

    let theme = useTheme()

  return (
    <div>
        <Paper elevation={1}>
        <h1>home</h1>
        </Paper>
        {/* <Button sx={{
            bgcolor:theme.palette.primary.main
        }}>
            submit
        </Button> */}
        <PrimaryButton >submit</PrimaryButton>
        <PrimaryText>input</PrimaryText>
              <br /><br />
        <CustomTextField
        label="Name"
        placeholder="Enter name"
        textColor='green'
        width='250px'
        
       // value={name}
       // onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      {/* CUSTOM STYLE */}
      <CustomTextField
        label="Email"
        placeholder="Enter email"
        width="400px"
        fontSize="20px"
        borderRadius="20px"
        bgColor="#000000"
        textColor="blue"
        labelColor="green"
        error={!true}
  helperText={!false ? "Password required" : ""}

      />
    </div>
  )
}

export default Home
