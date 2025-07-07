import React from 'react';
import Grid from '@mui/material/Grid';
import {SectionHeader} from 'components/section-header/SectionHeader';
import {ExternalLink, ProjectCard} from 'components/project-card/ProjectCard';
import {GitHub} from '@mui/icons-material';
import {ChipList} from '../../components/chip/ChipList';

const blackbirdLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unreal-proto-blackbird',
    title: 'Blackbird - on GitHub',
  },
];

const fishingMinigameLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unreal-udemy-aura/pull/34',
    title: 'Fishing Mini-Game - on GitHub',
  },
];

const dialogSystemLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unreal-proto-dialog-inventory',
    title: 'Dialog System - GitHub',
  },
];
const inventorySystemLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unreal-proto-dialog-inventory',
    title: 'Inventory System - GitHub',
  },
];

export const SectionPrototypes = () => (
  <Grid container size={12} spacing={2}>
    <SectionHeader title="Prototypes" />
    <ProjectCard
      title="Blackbird"
      links={blackbirdLinks}
      Hero={
        <Grid container size={12}>
          <Grid size={12}>
            <ChipList
              chips={[
                'Unreal Engine 5.6',
                'C++',
                'Gameplay Ability System',
                'Blueprint',
              ]}
            />
          </Grid>
        </Grid>
      }
    />
    <ProjectCard
      title="Fishing Mini-Game"
      links={fishingMinigameLinks}
      Hero={
        <Grid container size={12}>
          <Grid size={12} textAlign="center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-zrvGsSakBQ?si=yeVpzrwa41Ytiaal"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Grid>
          <Grid size={12}>
            <ChipList
              chips={[
                'Unreal Engine 5.6',
                'C++',
                'Gameplay Ability System',
                'Blueprint',
              ]}
            />
          </Grid>
        </Grid>
      }
    />
    <ProjectCard
      title="Dialog System"
      links={dialogSystemLinks}
      Footer={
        <Grid size={12}>
          <ChipList
            chips={[
              'Unreal Engine 5.5',
              'C++',
              'Blueprint',
              'Gameplay Tags',
              'Third-Person Template',
            ]}
          />
        </Grid>
      }
    />
    <ProjectCard
      title="Inventory System"
      links={inventorySystemLinks}
      Footer={
        <Grid size={12}>
          <ChipList
            chips={[
              'Unreal Engine 5.5',
              'C++',
              'Blueprint',
              'Gameplay Tags',
              'Third-Person Template',
            ]}
          />
        </Grid>
      }
    />
  </Grid>
);
