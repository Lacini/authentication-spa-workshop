import "./header.css";

import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.error('Not implemented yet');
  };

  return (
    <Box
      padding="0 8px"
      display="flex"
      height={48}
      bgcolor="#2a75bb"
      color="white"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h5">Authentication workshop</Typography>
      <IconButton onClick={handleOpenPopover} className="nav-bar--picture">
        <img alt="img" className="nav-bar--picture" src={undefined} />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img
                  alt="Profile picture"
                  className="nav-bar--popover--image"
                  src={undefined}
                />
              </Avatar>
            </ListItemAvatar>
            <Box display="flex" alignItems="center">
              <Typography>Joske</Typography>
            </Box>
          </ListItem>
          <ListItemButton onClick={handleLogout}>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </List>
      </Popover>
    </Box>
  );
}

export default Header;
