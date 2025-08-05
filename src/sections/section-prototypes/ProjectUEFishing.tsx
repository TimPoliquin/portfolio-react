import React from 'react';
import Grid from '@mui/material/Grid';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {GitHub} from '@mui/icons-material';
import {Media} from 'components/media-carousel/MediaCarousel';
import {Typography} from '@mui/material';
import {makeMedia} from '../../utils/makeMedia';

const fishingMinigameLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unreal-udemy-aura/pull/34',
    title: 'Fishing Mini-Game - on GitHub',
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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-zrvGsSakBQ?si=yeVpzrwa41Ytiaal"
        title="Fishing Mini-game Technical Review"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    ),
    key: 'technical-review-video',
  },
  ...fishingImages,
];

export const ProjectUEFishing = () => (
  <ProjectCard
    title="Fishing Mini-Game"
    links={fishingMinigameLinks}
    media={fishingMinigameMedia}
    timeframe="April, 2025"
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            This mini-game leverages Unreal Engine 5.6 and the Gameplay Ability
            System to challenge players to catch fish from multiple ponds around
            the map. Each pond has different fish, and each fish has different
            conditions for being caught. For example, one fish might require
            "daylight", while another fish might require "night". Ponds in the
            open sunlight have the "daylight" tag, while ponds in caves have the
            "night" tag. However, the fish may have requirements that differ
            from the conditions of the pond! It falls on the player to imbue the
            fishing rod with new statuses to override the conditions of the pond
            and capture the elusive fish!
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            This mini-game is built on top of my codebase after completing the
            Unreal Engine 5: Gameplay Ability System - Top Down RPG course. The
            video below dives into the technical details of the implementation.
          </Typography>
        </Grid>
      </Grid>
    }
    Footer={
      <Grid size={12}>
        <ChipList
          chips={[
            'Unreal Engine 5.5',
            'C++',
            'Gameplay Ability System',
            'Gameplay Tags',
            'Blueprint',
            'Landscape',
            'Water Bodies',
            'Niagara',
            'Lumen',
            'MVVM',
          ]}
        />
      </Grid>
    }
  />
);
