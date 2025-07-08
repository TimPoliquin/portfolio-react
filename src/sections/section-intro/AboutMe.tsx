import React from 'react';
import {Divider, Grid, Typography} from '@mui/material';

export const AboutMe = () => (
  <Grid container size={12} spacing={1}>
    <Grid size={12}>
      <Typography typography="h3">Tim Poliquin</Typography>
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
  </Grid>
);
