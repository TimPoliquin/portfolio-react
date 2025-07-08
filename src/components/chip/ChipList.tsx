import React from 'react';
import {styled} from '@mui/material/styles';
import {Chip, Theme} from '@mui/material';

const ListItem = styled('li')(({theme}: {theme: Theme}) => ({
  margin: theme.spacing(0.5),
}));
const List = styled('ul')(({theme}) => ({
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
}));

export interface ChipProps {
  label: string;
  icon?: React.ReactElement;
}

export interface ChipListProps {
  chips: (ChipProps | string)[];
}

const ChipRow = ({label, icon}: ChipProps) => (
  <ListItem key={label}>
    <Chip
      variant="outlined"
      label={label}
      sx={{borderRadius: 1, paddingLeft: icon ? 1 : undefined}}
      icon={icon}
      color="default"
    />
  </ListItem>
);

export const ChipList = ({chips}: ChipListProps) => (
  <List>
    {chips.map(chip =>
      typeof chip === 'string' ? (
        <ChipRow label={chip} />
      ) : (
        <ChipRow {...chip} />
      ),
    )}
  </List>
);
