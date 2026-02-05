import React from 'react';
import Grid from '@mui/material/Grid';
import {ProjectCard} from '../../components/project-card/ProjectCard';
import {Media} from '../../components/media-carousel/MediaCarousel';
import {YouTubeEmbed} from '../../components/youtube/YouTubeEmbed';
import {AuraYouTubeEmbed} from '../section-prototypes/AuraYouTubeEmbed';
import {OlympiaYouTubeEmbed} from '../section-projects/OlympiaYouTubeEmbed';

const udemyGasMedia: Media[] = [
  {
    component: (
      <YouTubeEmbed src="https://www.youtube.com/embed/DqWbHADog5k?si=IjSBZOJ6tZ7PscbL" />
    ),
    key: 'highlights-into-the-electric-castle',
  },
  {
    component: <AuraYouTubeEmbed />,
    key: 'highlights-aura',
  },
  {
    component: (
      <YouTubeEmbed src="https://www.youtube.com/embed/-zrvGsSakBQ?si=yeVpzrwa41Ytiaal" />
    ),
    key: 'highlights-fishing',
  },
  {
    component: <OlympiaYouTubeEmbed />,
    key: 'highlights-olympia',
  },
];

export const SectionHighlights = () => (
  <Grid container size={12} spacing={2}>
    <ProjectCard title="Highlight Reel" media={udemyGasMedia} />
  </Grid>
);
