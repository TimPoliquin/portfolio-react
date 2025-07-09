import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import {Article, GitHub} from '@mui/icons-material';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';

const towerDefenseLinks: ExternalLink[] = [
  {
    href: 'https://github.com/TimPoliquin/unity-prototype-tower-defense',
    title: 'Tower Defense - GitHub',
    Icon: <GitHub />,
  },
  {
    href: 'https://docs.google.com/document/d/1JDHBci9mAEPyOWQVMe1dNTc7r5SfHx0eEUffMuaoFYo/edit?usp=sharing',
    title: 'Design Document - Google Docs',
    Icon: <Article />,
  },
];

export const ProjectUnityTowerDefense = () => (
  <ProjectCard
    title="Tower Defense"
    timeframe="July, 2024"
    links={towerDefenseLinks}
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            Fill in information here about the tower defense game
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            This prototype was built in Unity 5.
          </Typography>
        </Grid>
      </Grid>
    }
    Footer={
      <Grid size={12}>
        <ChipList chips={['Unity', 'C#']} />
      </Grid>
    }
  />
);
