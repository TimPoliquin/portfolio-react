import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';

export const SectionHeader = ({title}: {title: string}) => (
  <Grid size={12} sx={{p: 2}}>
    <Typography
      typography="h2"
      sx={{
        textTransform: 'uppercase',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      {title}
    </Typography>
  </Grid>
);
