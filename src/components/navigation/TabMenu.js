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
    selectMenuItemhandler,
    value,
  } = props;

  const classes = useStyles();

  const menuItems = pages
    .filter((page) => (page.menuItem ? page : null))
    .map((page, index) => {
      return (
        <MenuItem
          id={`menuItem-${page.title}`}
          classes={{ root: classes.menuItem }}
          key={page.title}
          onClick={(event) => {
            selectMenuItemhandler(event, index);
            navigationHandler(event);
          }}
          component={Link}
          to={page.path}
          selected={index === selectedIndex && value === 1}
        >
          {page.title}
        </MenuItem>
      );
    });

  return (
    <Menu
      id={id}
      anchorEl={anchorEl}
      classes={{ paper: classes.menu }}
      elevation={0}
      keepMounted
      MenuListProps={{ onMouseLeave: closeMenuHandler }}
      open={open}
      onClose={closeMenuHandler}
    >
      {menuItems}
    </Menu>
  );
});

export default TabMenu;
