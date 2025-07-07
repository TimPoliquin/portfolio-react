import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import React from 'react';
import {styled} from '@mui/material/styles';
import {Card, CardContent, Chip, Theme, Typography} from '@mui/material';
import {Chat, Email, GitHub, LinkedIn} from '@mui/icons-material';

const languages = [
  'C++',
  'C#',
  'Java',
  'TypeScript',
  'JavaScript',
  'Kotlin',
  'HTML',
  'CSS',
  'Golang',
];
const gameEngines = ['Unreal Engine 5', 'Unity 6'];
const webTechnologies = [
  'React',
  'Node.js',
  'Emotion',
  'PCSS',
  'GraphQL',
  'SpringBoot',
  'Redis',
];
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

const ListPanel = ({title, items}: {title: string; items: string[]}) => (
  <Paper
    sx={{
      display: 'block',
      flexGrow: 1,
      p: 2,
    }}
  >
    <Box>
      <Typography typography="h3" display={'block'}>
        {title}
      </Typography>
    </Box>
    <List>
      {items.map(item => (
        <ListItem key={item} sx={{display: 'inline-block'}}>
          <Chip label={item} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export const SectionIntro = () => (
  <Grid container size={12}>
    <Typography typography="h2" hidden>
      Intro
    </Typography>
    <Grid container spacing={2}>
      <Grid container direction="column" size={{xs: 12, lg: 9}} spacing={2}>
        <Grid size={12} flexGrow={1}>
          <Card variant="elevation" sx={{height: '100%'}}>
            <CardContent>
              <Typography typography="h3">Greetings!</Typography>
              <Typography variant="body1">
                I'm Tim Poliquin, a game developer and full-stack web engineer
                with over 15 years of professional experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={12} flexShrink={1} flexBasis={0}>
          <Card variant="elevation" sx={{height: '100%'}}>
            <CardContent>
              <Typography typography="h3">Contacts</Typography>
              <List>
                <ListItem>
                  <Link
                    href="mailto:tim.poliquin@gmail.com"
                    title="Send Email"
                    target="email"
                  >
                    <Email fontSize="medium" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://discordapp.com/users/530118800360734720"
                    title="Discord Profile"
                    target="discord"
                  >
                    <Chat fontSize="medium" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.linkedin.com/in/timpoliquin/"
                    title="LinkedIn Profile"
                    target="linkedin"
                  >
                    <LinkedIn fontSize="medium" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://github.com/TimPoliquin"
                    title="GitHub Profile"
                    target="github"
                  >
                    <GitHub fontSize="medium" />
                  </Link>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container size={{xs: 12, lg: 3}} spacing={2}>
        <ListPanel title="Languages" items={languages} />
        <ListPanel title="Game Engines" items={gameEngines} />
        <ListPanel title="Web Tech" items={webTechnologies} />
      </Grid>
    </Grid>
  </Grid>
);
