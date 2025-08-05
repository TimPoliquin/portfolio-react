import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import Link from '@mui/material/Link';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {OlympiaSteamEmbed, OlympiaYouTubeEmbed} from './OlympiaYouTubeEmbed';
import {Steam} from 'components/icons/Steam';
import {Media} from 'components/media-carousel/MediaCarousel';
import {GitHub} from '@mui/icons-material';

const olympiaImages = Array(12)
  .fill(0)
  .map(
    (_, idx) =>
      `projects/olympia/olympia-${(idx + 1).toString().padStart(2, '0')}.webp`,
  );

const olympiaLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unity-olympia-festival-of-the-gods',
    title: 'Olympia: Festival of the Gods - on GitHub',
  },
  {
    Icon: <Steam />,
    href: 'https://store.steampowered.com/app/3316450/Olympia_Festival_of_the_Gods',
    title: 'Olympia: Festival of the Gods - on Steam',
  },
];

const olympiaMedia: Media[] = [
  {
    component: <OlympiaYouTubeEmbed />,
    key: 'olympia-trailer-embed',
  },
  ...olympiaImages.map(src => ({
    component: (
      <img
        src={src}
        alt="olympia gameplay"
        loading="lazy"
        style={{borderRadius: 4}}
      />
    ),
    key: src,
  })),
  {
    component: <OlympiaSteamEmbed />,
    key: 'olympia-steam-embed',
  },
];

export const ProjectOlympia = () => (
  <ProjectCard
    title="Olympia"
    subtitle="Festival of the Gods"
    links={olympiaLinks}
    timeframe="August - November, 2024"
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            Olympia: Festival of the Gods is a 2.5D tabletop board game based on
            Azul: Summer Pavillion created in Unity 6.0. It supports local
            multiplayer against human or AI opponents, and leaderboards via
            Steamworks API.
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            This project was created entirely by me, including all art assets,
            music, and sound effects. I also led playtesting sessions, which
            resulted in significant changes to the UI, layout, AI, art assets,
            and an optimization pass that changed the lighting model.
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            The game was released on{' '}
            <Link
              href="https://store.steampowered.com/app/3316450/Olympia_Festival_of_the_Gods"
              target="_blank"
            >
              Steam
            </Link>{' '}
            in November 2024.
          </Typography>
        </Grid>
      </Grid>
    }
    media={olympiaMedia}
    Footer={
      <Grid size={12} textAlign="center">
        <ChipList
          chips={[
            'Unity 6',
            'C#',
            'Steamworks',
            'Blender',
            'Gimp',
            'Opponent AI',
          ]}
        />
      </Grid>
    }
  />
);
