import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const TabMenu = ({
  id,
  anchorEl,
  options,
  open,
  openMenuHandler,
  closeMenuHandler,
}) => {
  const menuItems = options.map((option) => {
    return (
      <MenuItem key={option} onClick={openMenuHandler}>
        {option}
      </MenuItem>
    );
  });

  return (
    <Menu id={id} anchorEl={anchorEl} open={open} onClose={closeMenuHandler}>
      {menuItems}
    </Menu>
  );
};

export default TabMenu;
