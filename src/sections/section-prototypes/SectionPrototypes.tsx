import React from 'react';
import Grid from '@mui/material/Grid';
import {SectionHeader} from 'components/section-header/SectionHeader';
import {ProjectUEBlackbird} from './ProjectUEBlackbird';
import {ProjectUEFishing} from './ProjectUEFishing';
import {ProjectUEDialogInventory} from './ProjectUEDialogInventory';

export const SectionPrototypes = () => (
  <Grid container size={12} spacing={2}>
    <SectionHeader title="Prototypes" />
    <ProjectUEBlackbird />
    <ProjectUEFishing />
    <ProjectUEDialogInventory />
  </Grid>
);
