import React from 'react';
import Grid from '@mui/material/Grid';
import {ChipList} from '../../components/chip/ChipList';
import {
  ExternalLink,
  ProjectCard,
} from '../../components/project-card/ProjectCard';
import {GitHub} from '@mui/icons-material';
import {Link, Typography} from '@mui/material';
import {UnrealEngine} from '../../components/icons/UnrealEngine';

const dialogSystemLinks: ExternalLink[] = [
  {
    Icon: <GitHub />,
    href: 'https://github.com/TimPoliquin/unreal-proto-dialog-inventory',
    title: 'Dialog and Inventory Systems - GitHub',
  },
];

export const ProjectUEDialogInventory = () => (
  <ProjectCard
    title="Dialog and Inventory Systems"
    links={dialogSystemLinks}
    timeframe="April, 2025"
    Hero={
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography typography="paragraph" color="textSecondary">
            The dialog and inventory systems project was created over three days
            for a technical test. The test demanded developers create two
            systems:
          </Typography>
          <ul>
            <li>
              <Typography color="textSecondary">
                An item pickup and inventory management system
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                A dialog system for interacting with NPCs
              </Typography>
            </li>
          </ul>
          <Typography typography="paragraph" color="textSecondary">
            Additionally, the inventory system should offer either 2D or 3D
            asset previews. 3D assets should have the ability to rotate and zoom
            on the asset.
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography color="textSecondary">
            The details of my implementation are available in the{' '}
            <Link href="https://github.com/TimPoliquin/unreal-proto-dialog-inventory">
              GitHub README
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    }
    Footer={
      <Grid size={12}>
        <ChipList
          chips={[
            {label: 'Unreal Engine 5.5', icon: <UnrealEngine />},
            'C++',
            'Blueprint',
            'Gameplay Tags',
            'Third-Person Template',
            'MVVM',
          ]}
        />
      </Grid>
    }
  />
);
