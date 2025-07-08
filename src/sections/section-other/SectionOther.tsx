import React from 'react';
import {SectionHeader} from '../../components/section-header/SectionHeader';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {Media} from 'components/media-carousel/MediaCarousel';
import {PortfolioInception} from 'sections/section-projects/PortfolioInception';
import {GitHub} from '@mui/icons-material';

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

export const SectionOther = () => (
  <Grid container spacing={2}>
    <SectionHeader title="Other" />
    <ProjectCard
      title="This Portfolio!"
      links={portfolioLinks}
      media={portfolioMedia}
      Hero={
        <Grid container size={12} spacing={2}>
          <Grid size={12}>
            <Typography typography="paragraph" color="textSecondary">
              This portfolio exists to highlight my game development projects,
              but I have had a successful career as a fullstack engineer
              creating web applications in React, Web Components, JSP, and more.
            </Typography>
          </Grid>
        </Grid>
      }
      Footer={
        <Grid size={12}>
          <ChipList chips={['React', 'TypeScript', 'MUI', 'HTML', 'CSS']} />
        </Grid>
      }
    />
  </Grid>
);
