/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.content,
  },
}));

function About() {
  const s = useStyles();

  return (
    <div className={s.root}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography paragraph>
        Social Lite helps people improve their social skills through
        recommendations and challenges. Once the user completes the task, they
        are rewarded.
      </Typography>
    </div>
  );
}

export default About;
