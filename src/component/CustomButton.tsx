import { Button } from "@mui/material";
// import React from "react";
import { makeStyles } from "mui-styles-hook";

interface Props {
  buttontype: "button" | "submit" | "reset" | undefined;
  title: string;
  handleClick?: () => void;
}

const useStyles = makeStyles(() => ({
  button: {
    background:
      "linear-gradient(90.9deg, rgb(3, 195, 195) 0.3%, rgb(37, 84, 112) 87.8%)",
    marginLeft: "3px",
  },
}));

function CustomButton({ buttontype, title, handleClick }: Props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      sx={classes.button}
      type={buttontype}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
