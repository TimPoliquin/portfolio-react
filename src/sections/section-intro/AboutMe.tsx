import React from 'react';
import {Divider, Grid, Typography} from '@mui/material';

export const AboutMe = () => (
  <Grid container size={12} spacing={1}>
    <Grid size={12}>
      <Typography typography="h3" color="success">
        Tim Poliquin
      </Typography>
      <Typography typography="h4">Game Developer</Typography>
      <Typography typography="h4">Full-Stack Web Engineer</Typography>
    </Grid>
    <Grid size={12}>
      <Divider sx={{width: '100%', height: '1px'}} />
    </Grid>
    <Grid size={12}>
      <Typography variant="body1" color="text.secondary">
        Greetings! I'm Tim Poliquin, a game developer and full-stack web
        engineer with over 15 years of professional experience.
      </Typography>
    </Grid>
    <Grid size={6}>
      <Typography typography="caption">Location</Typography>
      <Typography typography="subtitle1" color="textSecondary">
        Raleigh, NC
      </Typography>
    </Grid>
    <Grid size={6}>
      <Typography typography="caption">Experience</Typography>
      <Typography typography="subtitle1" color="textSecondary">
        16 Years
      </Typography>
    </Grid>
  </Grid>
);
