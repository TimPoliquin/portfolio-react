import React from 'react';
import Grid from '@mui/material/Grid';
import {SectionHeader} from 'components/section-header/SectionHeader';
import {ProjectOlympia} from './ProjectOlympia';

export const SectionProjects = () => (
  <Grid container spacing={2}>
    <SectionHeader title="Shipped Projects" />
    <ProjectOlympia />
  </Grid>
);
