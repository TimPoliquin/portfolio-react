import React from 'react';
import Grid from '@mui/material/Grid';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {GitHub} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import {UnrealEngine} from '../../components/icons/UnrealEngine';
import {YouTubeEmbed} from '../../components/youtube/YouTubeEmbed';
import {Media} from '../../components/media-carousel/MediaCarousel';

const externalLinks: ExternalLink[] = [
  {
    href: 'https://github.com/TimPoliquin/unreal-electric-castle',
    title: 'Into the Electric Castle - GitHub',
    Icon: <GitHub />,
  },
];
const media: Media[] = [
  {
    component: (
      <YouTubeEmbed src="https://www.youtube.com/embed/DqWbHADog5k?si=IjSBZOJ6tZ7PscbL" />
    ),
    key: 'electric-castle-demo-2025-08',
  },
];
export const ProjectUEElectricCastle = () => (
  <ProjectCard
    title="Into the Electric Castle"
    links={externalLinks}
    timeframe="September, 2025 - Present"
    media={media}
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            Based on the Ayreon album "Into the Electric Castle - A Space
            Opera". Whisked away to a place beyond time and space, players must
            use the abilities of each of the eight characters to solve puzzles
            and defeat enemies.
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography typography="h4">Technical Details</Typography>
          <Typography typography="paragraph" color="textSecondary">
            This game is built in Unreal Engine 5.7, and leverages a number of
            features from the Unreal toolset including:
            <ul>
              <li>
                <b>Gameplay Ability System</b> for character abilities, effects,
                attributes, and more
              </li>
              <li>
                <b>Metahuman</b> for each of the playable character models
              </li>
              <li>
                <b>Replication</b> to support co-op multiplayer
              </li>
              <li>
                <b>Niagara</b> for ability and environmental effects
              </li>
              <li>
                <b>ModelView-ViewModel</b> for UI updates based on character
                states
              </li>
            </ul>
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
            'Metahuman',
            'MVVM',
            'Niagara',
          ]}
        />
      </Grid>
    }
  />
);
