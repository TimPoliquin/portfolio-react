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
    <Grid size={12}>
      <Typography typography="h3" color="success">
        Game Developer and Full-Stack Engineer
      </Typography>
    </Grid>
    <Divider
      sx={{
        height: '1px',
        width: '100%',
      }}
    />
    <Grid container size={12}>
      <Grid size={6}>
        <Typography typography="caption" color="textSecondary">
          Location
        </Typography>
        <Typography typography="subtitle1">Raleigh, NC</Typography>
      </Grid>
      <Grid size={6}>
        <Typography typography="caption" color="textSecondary">
          Experience
        </Typography>
        <Typography typography="subtitle1">16 Years</Typography>
      </Grid>
    </Grid>
    <ListPanel title="Languages" items={languages} />
    <ListPanel title="Game Engines" items={gameEngines} />
    <ListPanel title="Web Technologies" items={webTechnologies} />
  </Grid>
);
