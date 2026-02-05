import React from 'react';
import Grid from '@mui/material/Grid';
import {SectionHeader} from 'components/section-header/SectionHeader';
import {ProjectUEBlackbird} from './ProjectUEBlackbird';
import {ProjectUEDialogInventory} from './ProjectUEDialogInventory';
import {ProjectUnityTowerDefense} from './ProjectUnityTowerDefense';
import {ProjectUEAura} from './ProjectUEAura';
import {ProjectUEElectricCastle} from './ProjectUEElectricCastle';

export const SectionPrototypes = () => (
  <Grid container size={12} spacing={2}>
    <SectionHeader title="Prototypes" />
    <ProjectUEElectricCastle />
    <ProjectUEAura />
    <ProjectUEBlackbird />
    <ProjectUEDialogInventory />
    <ProjectUnityTowerDefense />
  </Grid>
);
