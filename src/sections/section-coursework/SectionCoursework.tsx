import React from 'react';
import Grid from '@mui/material/Grid';
import {SectionHeader} from '../../components/section-header/SectionHeader';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {GitHub, School} from '@mui/icons-material';
import {ChipList} from '../../components/chip/ChipList';
import {Media} from '../../components/media-carousel/MediaCarousel';
import {Image} from '../../components/image/Image';
import {Typography} from '@mui/material';
import {makeMedia} from '../../utils/makeMedia';

const udemyGasLinks: ExternalLink[] = [
  {
    href: 'https://github.com/TimPoliquin/unreal-udemy-aura',
    title: 'Aura: Master of the Elements - GitHub',
    Icon: <GitHub />,
  },
  {
    href: 'https://www.udemy.com/share/109vYc3@0wt6_SWuQ6YUBvm1lNsR4D7397nbHcE4t2Myy0Njp1y651WQHo3NTVZKEBZWUpNH/',
    title: 'Udemy - Unreal Engine 5 Gameplay Ability System - Top Down RPG',
    Icon: <School />,
  },
];

const udemyGasMedia: Media[] = [
  ...makeMedia({
    pathname: 'coursework/udemy-gas',
    title: 'aura',
    extension: 'png',
    size: 8,
  }),
  {
    component: (
      <Image
        src="coursework/udemy-gas/udemy-aura-cert.jpg"
        alt="Certification for completing the course"
        sx={{height: 337}}
      />
    ),
    key: 'udemy-aura-cert',
  },
];

const udemyCPPLinks: ExternalLink[] = [
  {
    Icon: <School />,
    href: 'https://www.udemy.com/share/101Weu3@mqkZgl10lIAGl-yZszg4AHFD_s-9YX7d8ATtkQQluWmsvW5BGo4dRbIqFu1KiUpc/',
    title: 'Udemy - Unreal Engine 5 C++ Developer Course',
  },
];

const udemyCPPMedia: Media[] = [
  {
    component: (
      <Image
        src="coursework/udemy-ue/udemy-slash-cert.jpg"
        alt="Certification for completing the course"
        sx={{height: 337}}
      />
    ),
    key: 'udemy-aura-cert',
  },
];

export const SectionCoursework = () => (
  <Grid container size={12} spacing={2}>
    <SectionHeader title="Coursework" />
    <ProjectCard
      title="Unreal Engine 5"
      subtitle="Gameplay Ability System - Top Down RPG"
      timeframe="February - April, 2025"
      links={udemyGasLinks}
      Hero={
        <Grid container size={12} spacing={2}>
          <Grid size={12}>
            <Typography typography="paragraph" color="textSecondary">
              In this course, I created a top-down action RPG in Unreal Engine
              5.5 using the Gameplay Ability System (GAS). Many of the features
              support multiplayer, though the final chapters of the course set
              aside multiplayer functionality in favor of creating save states
              without the need for a server to manage player attributes/state.
            </Typography>
          </Grid>
          <Grid size={12}></Grid>
        </Grid>
      }
      media={udemyGasMedia}
      Footer={
        <Grid size={12}>
          <ChipList
            chips={[
              'Unreal Engine 5.5',
              'C++',
              'Gameplay Ability System',
              'Gameplay Tags',
              'RPC',
              'Blueprint',
              'Lumen',
              'Niagara',
              'Udemy',
            ]}
          />
        </Grid>
      }
    />
    <ProjectCard
      title="Unreal Engine 5 C++"
      subtitle="The Ultimate Game Developer Course"
      timeframe="January 2025"
      Hero={
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            In this course, I got a beginner overview of Unreal Engine 5 and
            many of its systems, and improved my familiarity with C++. Topics
            included creating landscapes, characters, animation montages,
            materials, UI, and more. The end result of this course was a large
            populated landscape and dungeon, and a simple third-person action
            battle system.
          </Typography>
        </Grid>
      }
      links={udemyCPPLinks}
      media={udemyCPPMedia}
      Footer={
        <Grid size={12}>
          <ChipList
            chips={['Unreal Engine 5.6', 'C++', 'Blueprint', 'Udemy']}
          />
        </Grid>
      }
    />
  </Grid>
);
