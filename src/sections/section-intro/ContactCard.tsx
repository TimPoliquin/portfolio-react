import {Button, Divider, Theme, Typography} from '@mui/material';
import React, {PropsWithChildren} from 'react';
import {styled} from '@mui/material/styles';
import {Article, Email, GitHub, LinkedIn} from '@mui/icons-material';
import {Discord} from '../../components/icons/Discord';
import Grid from '@mui/material/Grid';
import {ContentCard} from '../../components/content-card/ContentCard';

const ListItem = styled('li')(({theme}: {theme: Theme}) => ({
  margin: theme.spacing(0.5),
  '& svg': {
    fill: theme.palette.text.secondary,
  },
  '&:hover svg': {
    fill: theme.palette.text.primary,
  },
}));
const List = styled('ul')(({theme}) => ({
  marginBottom: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
}));

export const ContactCard = ({children}: PropsWithChildren) => (
  <ContentCard sx={{height: '100%', width: '100%'}}>
    <Grid container size={12} spacing={1}>
      <Grid size={12}>
        <Typography typography="h3" color="success">
          Contact
        </Typography>
      </Grid>
      <Grid size={12}>
        <Divider />
      </Grid>
      {children ? <Grid size={12}>{children}</Grid> : null}
      <Grid size={12}>
        <List>
          <ListItem>
            <Button
              variant="outlined"
              target="_blank"
              startIcon={<Email />}
              href="mailto:tim.poliquin@gmail.com"
              fullWidth
              color="primary"
            >
              Email
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              target="_blank"
              startIcon={<Discord />}
              href="https://discordapp.com/users/530118800360734720"
              fullWidth
            >
              Discord
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/timpoliquin/"
              target="_blank"
              startIcon={<LinkedIn />}
              fullWidth
            >
              LinkedIn
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              href="https://github.com/TimPoliquin"
              target="_blank"
              startIcon={<GitHub />}
              fullWidth
            >
              GitHub
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              href="https://docs.google.com/document/d/154mckQbXnTm00HgfAfP7HKnE1nxIddKQVW4MlEwo1Lo/edit?usp=sharing"
              target="_blank"
              startIcon={<Article />}
              fullWidth
            >
              Resume
            </Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </ContentCard>
);
