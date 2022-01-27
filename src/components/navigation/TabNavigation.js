import React from 'react';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/core/styles';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,

    minWidth: 10,
    marginLeft: '25px',
  },
  tabs: {
    marginLeft: 'auto',
  },
}));

const Navigation = ({ navigationHandler, tabMenuOptions, activeIndex }) => {
  const classes = useStyles();

  const navigationTabs = pages
    .filter((page) => (page.tabItem ? page : null))
    .map((page) => {
      return (
        <Tab
          className={classes.tab}
          component={Link}
          key={`${page.title}-tabItem`}
          label={page.title}
          to={page.path}
          aria-owns={page.attachMenu ? tabMenuOptions.ariaOwns : undefined}
          aria-haspopup={page.attachMenu ? tabMenuOptions.ariaOwns : undefined}
          onMouseOver={page.attachMenu ? tabMenuOptions.onMouseOver : undefined}
        />
      );
    });

  return (
    <Tabs
      className={classes.tabs}
      value={activeIndex}
      onChange={navigationHandler}
      indicatorColor="primary"
    >
      {navigationTabs}
    </Tabs>
  );
};

export default Navigation;
