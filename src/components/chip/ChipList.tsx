import React from 'react';
import {styled} from '@mui/material/styles';
import {Chip, Theme} from '@mui/material';

const ListItem = styled('li')(({theme}: {theme: Theme}) => ({
  margin: theme.spacing(0.5),
}));
const List = styled('ul')(({theme}) => ({
  marginBottom: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
}));

export const ChipList = ({chips}: {chips: string[]}) => (
  <List>
    {chips.map(chip => (
      <ListItem key={chip}>
        <Chip label={chip} />
      </ListItem>
    ))}
  </List>
);
