import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';

export const SectionHeader = ({title}: {title: string}) => (
  <Grid size={12}>
    <Typography
      typography="h2"
      color="textPrimary"
      sx={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      {title}
    </Typography>
  </Grid>
);
