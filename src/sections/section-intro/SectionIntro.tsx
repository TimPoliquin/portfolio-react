import Grid from '@mui/material/Grid';
import React from 'react';
import {Divider, Typography} from '@mui/material';
import {ChipList, ChipListProps, ChipProps} from 'components/chip/ChipList';
import {UnrealEngine} from '../../components/icons/UnrealEngine';
import {Unity} from '../../components/icons/Unity';
import {TypeScript} from 'components/icons/TypeScript';
import {ReactIcon} from '../../components/icons/React';
import {NodeJS} from '../../components/icons/NodeJS';
import {GraphQL} from '../../components/icons/GraphQL';
import {SpringBoot} from 'components/icons/SpringBoot';
import {JavaScript} from '../../components/icons/JavaScript';
import {Kotlin} from '../../components/icons/Kotlin';
import {Golang} from '../../components/icons/Golang';
import {Java} from '../../components/icons/Java';
import {CPlusPlus} from '../../components/icons/CPlusPlus';
import {ContentCard} from '../../components/content-card/ContentCard';

const languages: (ChipProps | string)[] = [
  {label: 'C++', icon: <CPlusPlus />},
  'C#',
  {label: 'Java', icon: <Java />},
  {label: 'TypeScript', icon: <TypeScript />},
  {label: 'JavaScript', icon: <JavaScript />},
  {label: 'Kotlin', icon: <Kotlin />},
  {label: 'Golang', icon: <Golang />},
  'HTML',
  'CSS',
];
const gameEngines: (ChipProps | string)[] = [
  {label: 'Unreal Engine 5', icon: <UnrealEngine />},
  {label: 'Unity 6', icon: <Unity />},
];
const webTechnologies: (ChipProps | string)[] = [
  {label: 'React', icon: <ReactIcon />},
  {label: 'Node.js', icon: <NodeJS />},
  'Emotion',
  'PCSS',
  {label: 'GraphQL', icon: <GraphQL />},
  {label: 'SpringBoot', icon: <SpringBoot />},
  'Redis',
];

const ListPanel = ({
  title,
  items,
}: {
  title: string;
  items: ChipListProps['chips'];
}) => (
  <Grid container size={12} spacing={1}>
    <Grid size={12}>
      <Typography typography="h3" color="success">
        {title}
      </Typography>
    </Grid>
    <Grid size={12}>
      <Divider />
    </Grid>
    <Grid size={12}>
      <ChipList chips={items} />
    </Grid>
  </Grid>
);

export const SectionIntro = () => (
  <Grid container size={12} spacing={2}>
    <ContentCard sx={{width: '100%'}}>
      <ListPanel title="Languages" items={languages} />
    </ContentCard>
    <ContentCard sx={{width: '100%'}}>
      <ListPanel title="Game Engines" items={gameEngines} />
    </ContentCard>
    <ContentCard sx={{width: '100%'}}>
      <ListPanel title="Web Technologies" items={webTechnologies} />
    </ContentCard>
  </Grid>
);
