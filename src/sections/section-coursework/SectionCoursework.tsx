import React from 'react';
import Grid from '@mui/material/Grid';
import {SectionHeader} from '../../components/section-header/SectionHeader';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {GitHub} from '@mui/icons-material';
import {ChipList} from '../../components/chip/ChipList';
import {Media} from '../../components/media-carousel/MediaCarousel';
import {Image} from '../../components/image/Image';

const udemyGasLinks: ExternalLink[] = [
  {
    href: 'https://github.com/TimPoliquin/unreal-udemy-aura',
    title: 'Aura: Master of the Elements - GitHub',
    Icon: <GitHub />,
  },
];

const udemyGasMedia: Media[] = [
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
      links={udemyGasLinks}
      Hero={undefined}
      Media={udemyGasMedia}
      Footer={
        <Grid size={12}>
          <ChipList
            chips={[
              'Unreal Engine 5.6',
              'C++',
              'Gameplay Ability System',
              'Blueprint',
              'Udemy',
            ]}
          />
        </Grid>
      }
    />
    <ProjectCard
      title="Unreal Engine 5 C++"
      subtitle="The Ultimate Game Developer Course"
      Hero={undefined}
      Media={udemyCPPMedia}
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
