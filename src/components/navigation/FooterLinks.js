import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';

import { pages } from '../../config/pageConfig';

const useStyles = makeStyles((theme) => ({
  footerLinks: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
}));

const FooterLink = ({ box }) => {
  const classes = useStyles();
  const footerLinks = pages
    .filter((page) => (page.footerBox && page.footerBox === box ? page : null))
    .map((page) => {
      return (
        <Grid
          item
          className={classes.footerLinks}
          key={`footerLink-${page.title}`}
        >
          <Typography component={Link} to={page.path}>
            {page.title}
          </Typography>
        </Grid>
      );
    });

  return <>{footerLinks}</>;
};

export default FooterLink;
