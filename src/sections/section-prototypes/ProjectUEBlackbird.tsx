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
import {BlackbirdYouTubeEmbed} from './BlackbirdYouTubeEmbed';
import {UnrealEngine} from '../../components/icons/UnrealEngine';

const blackbirdLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unreal-proto-blackbird',
    title: 'Blackbird - on GitHub',
  },
];
const blackbirdMedia: Media[] = [
  {
    component: <BlackbirdYouTubeEmbed />,
    key: 'blackbird-demo-2025-07',
  },
];
export const ProjectUEBlackbird = () => (
  <ProjectCard
    title="Blackbird"
    links={blackbirdLinks}
    timeframe="May - July, 2025"
    media={blackbirdMedia}
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            Blackbird is a third-person multiplayer rail shooter. The player
            controls a dragon as it flies through levels, destroying enemy
            ships, turrets, laser arrays, and more! It leverages Unreal Engine
            5.6 and the Gameplay Ability System.
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            My goal for this project was to create a game from scratch that
            demonstrated and reinforced my learnings from my courses. In
            particular, I wanted to enhance my hands-on knowledge of the
            Gameplay Ability System and how it works in a multiplayer
            environment.
          </Typography>
        </Grid>
      </Grid>
    }
    Footer={
      <Grid size={12}>
        <ChipList
          chips={[
            {label: 'Unreal Engine 5.6', icon: <UnrealEngine />},
            'C++',
            'Gameplay Ability System',
            'Gameplay Tags',
            'Blueprint',
            'Multiplayer',
            'Niagara',
            'MVVM',
          ]}
        />
      </Grid>
    }
  />
);
