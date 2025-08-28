import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import {Article, GitHub} from '@mui/icons-material';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {Media} from '../../components/media-carousel/MediaCarousel';
import {UnityTowerDefenseYoutubeEmbed} from './UnityTowerDefenseYoutubeEmbed';
import {Unity} from '../../components/icons/Unity';

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

const towerDefenseMedia: Media[] = [
  {
    component: <UnityTowerDefenseYoutubeEmbed />,
    key: 'tower-defense-embed',
  },
];

export const ProjectUnityTowerDefense = () => (
  <ProjectCard
    title="Tower Defense"
    timeframe="July, 2024"
    links={towerDefenseLinks}
    media={towerDefenseMedia}
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            <p>
              Built in Unity 2022, the Tower Defense featured a day/night cycle
              in which players could build and improve their bases during the
              day, and would have to defend the base from oncoming hoards during
              the night. They player has access to multiple spells and abilities
              to combat enemies, in addition to base defenses.
            </p>
            <p>
              Special consideration was given to performance to allow for
              hundreds of units to attack the player and bases without resulting
              in unplayable slowdown.
            </p>
          </Typography>
        </Grid>
      </Grid>
    }
    Footer={
      <Grid size={12}>
        <ChipList chips={[{label: 'Unity', icon: <Unity />}, 'C#']} />
      </Grid>
    }
  />
);
