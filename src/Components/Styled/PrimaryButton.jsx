import { Button, styled } from "@mui/material";
import TextField from "@mui/material/TextField";

export let PrimaryButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    color:"white",
    border:"20px",
    '&:hover':{
        backgroundColor:'blue',
        color:'white'
        
    }

}))

export let PrimaryText = styled(TextField)(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    color:"black",
    border:"20px",
    '&:hover':{
        backgroundColor:'blue',
        color:'white'
        
    }

}))

export let LinkButton = styled(Button)(({theme})=>({
    backgroundColor:"black",
    color:"white",
    border:"20px",
    
    '&:hover':{
        textDecoration:"underline",
        color:'white'
        
    }

}))





export const CustomTextField = ({
  // BASIC PROPS
  label = "Enter Text",
  placeholder = "",
  type = "text",
  value ,
  onChange,

  // STYLE PROPS
  width = "100%",
  size = "small",
  fontSize = "16px",
  borderRadius = "10px",
  bgColor = "white",
  textColor = "black",
  labelColor = "gray",

  // EXTRA
  sx = {},

  // OTHER MUI PROPS
  ...rest
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      size={size}
      fullWidth

      sx={{
        width,

        // INPUT BOX
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadius,
          backgroundColor: bgColor,
          color: textColor,
          fontSize: fontSize,
        },

        // INPUT TEXT
        "& .MuiOutlinedInput-input": {
          fontSize: fontSize,
        },

        // LABEL
        "& .MuiInputLabel-root": {
          color: labelColor,
          fontSize: fontSize,
        },

        ...sx,
      }}

      {...rest}
    />
  );
};

//export default CustomTextField;

// const styledvalue ={PrimaryButton,PrimaryText}

// export default styledvalue