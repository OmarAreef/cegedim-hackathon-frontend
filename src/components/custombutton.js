import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledButton = withStyles({
  root: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    height: "3.5rem",
    width: "80%",
    padding: "1.25rem",
    boxSizing: "border-box",
    borderRadius: 16,
    background: "#4f25f7dd",
    border: "1px solid #4f25f7 ",
    color: "#fff",
    boxShadow: "0px 5px 6px 5px #c7d8ed",
    transition: "all .25s ease-in",
    "&:hover": {
      backgroundColor: "#4f25f7"
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function CustomBtn(props) {
  return (
    <a href="form" style={ {textDecoration  : "none" } }><StyledButton variant="contained">{props.txt}</StyledButton></a>
  )
}

export default CustomBtn
