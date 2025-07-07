import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import {GitHub} from '@mui/icons-material';
import {SectionHeader} from 'components/section-header/SectionHeader';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {Steam} from 'components/icons/Steam';
import {ChipList} from '../../components/chip/ChipList';
import {OlympiaSteamEmbed, OlympiaYouTubeEmbed} from './OlympiaYouTubeEmbed';
import {Media} from '../../components/media-carousel/MediaCarousel';
import {PortfolioInception} from './PortfolioInception';

const olympiaImages = Array(12)
  .fill(0)
  .map(
    (_, idx) =>
      `projects/olympia/olympia-${(idx + 1).toString().padStart(2, '0')}.jpg`,
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

const portfolioLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/portfolio-react',
    title: 'Tim Poliquin - Game Developer Portfolio - GitHub',
  },
];

const portfolioMedia: Media[] = [
  {component: <PortfolioInception />, key: 'portfolio-inception'},
];

export const SectionProjects = () => (
  <Grid container spacing={2}>
    <SectionHeader title="Shipped Projects" />
    <ProjectCard
      title="Olympia: Festival of the Gods"
      links={olympiaLinks}
      Hero={
        <Grid container size={12} spacing={2}>
          <Grid size={12}>
            <Typography typography="body1">
              Solo-Developed by Tim Poliquin
            </Typography>
          </Grid>
        </Grid>
      }
      Media={olympiaMedia}
      Footer={
        <Grid container size={12} textAlign="center">
          <Grid size={4}>
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
        </Grid>
      }
    />
    <ProjectCard
      title="This Portfolio!"
      links={portfolioLinks}
      Media={portfolioMedia}
      Footer={
        <Grid size={12}>
          <ChipList chips={['React', 'TypeScript', 'MUI', 'HTML', 'CSS']} />
        </Grid>
      }
    />
  </Grid>
);
