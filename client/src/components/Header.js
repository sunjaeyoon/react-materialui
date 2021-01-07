import React from 'react';
import Typography from '@material-ui/core/Typography';
import "./Header.css"

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_right">
        <Typography variant="h4">Something right here</Typography>
      </div>
      <div className="header_left">
        <Typography variant="h5">Something 1</Typography>
        <Typography variant="h5">Something 2</Typography>
        <Typography variant="h5">Something 3</Typography>
        <Typography variant="h5">Something 4</Typography>
      </div>
    </div>
  )
}

export default Header

