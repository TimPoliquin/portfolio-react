import React from 'react';
import Grid from '@mui/material/Grid';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {GitHub} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import {Media} from '../../components/media-carousel/MediaCarousel';
import {AuraYouTubeEmbed} from './AuraYouTubeEmbed';
import {makeMedia} from '../../utils/makeMedia';
import {YouTubeEmbed} from '../../components/youtube/YouTubeEmbed';
import {UnrealEngine} from '../../components/icons/UnrealEngine';

const auraLinks: ExternalLink[] = [
  {
    href: 'https://github.com/TimPoliquin/unreal-udemy-aura',
    title: 'Aura: Master of the Elements - GitHub',
    Icon: <GitHub />,
  },
];
const fishingImages = makeMedia({
  pathname: 'prototypes/fishing',
  title: 'fishing',
  extension: 'webp',
  size: 12,
});
const fishingMinigameMedia: Media[] = [
  {
    component: (
      <YouTubeEmbed src="https://www.youtube.com/embed/-zrvGsSakBQ?si=yeVpzrwa41Ytiaal" />
    ),
    key: 'aura-fishing-tech-overview',
  },
  ...fishingImages,
];
const auraMedia: Media[] = [
  {
    component: <AuraYouTubeEmbed />,
    key: 'aura-demo-2025-08',
  },
  ...fishingMinigameMedia,
];
export const ProjectUEAura = () => (
  <ProjectCard
    title="Aura - Master of the Elements"
    links={auraLinks}
    timeframe="April, 2025 - Present"
    media={auraMedia}
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            Continuing on from the Unreal Engine 5: Gameplay Ability System -
            Top Down RPG course, this project aims to create a fun
            dungeon-crawler RPG by expanding on the concepts covered in the
            course. Several new features have been added, including:
            <ul>
              <li>Inventory System</li>
              <li>
                Lock mechanism with support for keys, switches, or custom logic
              </li>
              <li>Treasure chests</li>
              <li>Horde Mode</li>
              <li>Fishing mini-game</li>
            </ul>
            Development on this project is on-going, and new features will be
            listed here as they are added!
          </Typography>
        </Grid>
      </Grid>
    }
    Footer={
      <Grid size={12}>
        <ChipList
          chips={[
            {icon: <UnrealEngine />, label: 'Unreal Engine 5.6'},
            'C++',
            'Gameplay Ability System',
            'Gameplay Tags',
            'Blueprint',
            'Niagara',
            'MVVM',
          ]}
        />
      </Grid>
    }
  />
);
