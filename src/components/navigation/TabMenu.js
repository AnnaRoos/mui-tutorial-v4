import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { pages } from '../../config/pageConfig';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: theme.palette.common.white,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const TabMenu = React.forwardRef((props, ref) => {
  const {
    anchorEl,
    closeMenuHandler,
    id,
    navigationHandler,
    open,
    selectedIndex,
    selectedMenuItemHandler,
    value,
  } = props;

  const classes = useStyles();

  const menuItems = pages
    .filter((page) => (page.menuItem ? page : null))
    .map((page) => {
      return (
        <MenuItem
          classes={{ root: classes.menuItem }}
          component={Link}
          key={`${page.title}-menuItem`}
          onClick={(event) => {
            selectedMenuItemHandler(page.selectedIndex);
            navigationHandler(event, page.activeIndex);
          }}
          selected={page.selectedIndex === selectedIndex && value === 1}
          to={page.path}
        >
          {page.title}
        </MenuItem>
      );
    });

  return (
    <Menu
      anchorEl={anchorEl}
      classes={{ paper: classes.menu }}
      style={{ zIndex: 1302 }}
      elevation={0}
      id={id}
      keepMounted
      MenuListProps={{ onMouseLeave: closeMenuHandler }}
      onClose={closeMenuHandler}
      open={open}
    >
      {menuItems}
    </Menu>
  );
});

export default TabMenu;
