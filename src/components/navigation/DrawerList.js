import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  listItems: {
    opacity: 0.7,
  },
  selectedListItem: {
    opacity: 1,
  },
  estimateItem: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
  },
}));

const DrawerList = ({ navigationHandler, toggleDrawerHandler, value }) => {
  const classes = useStyles();
  const listItems = pages
    .filter((page) => (page.drawerItem ? page : null))
    .map((page) => {
      return (
        <ListItem
          button
          classes={{ selected: classes.selectedListItem }}
          className={
            page.title === 'Free Estimate'
              ? classes.estimateItem
              : classes.listItems
          }
          component={Link}
          divider
          key={`${page.title}-drawerItem`}
          onClick={(event) => {
            toggleDrawerHandler();
            navigationHandler(event, page.activeIndex);
          }}
          selected={value === page.activeIndex}
          to={page.path}
        >
          <ListItemText disableTypography>{page.title}</ListItemText>
        </ListItem>
      );
    });

  return <List disablePadding>{listItems}</List>;
};

export default DrawerList;
