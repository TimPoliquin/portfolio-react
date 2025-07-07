import React, {PropsWithChildren} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import {ImageListItem, Typography} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import {styled} from '@mui/material/styles';
import {GitHub} from '@mui/icons-material';
import {SectionHeader} from 'components/section-header/SectionHeader';

const olympiaImages = [
  'projects/olympia/olympia-01.jpg',
  'projects/olympia/olympia-02.jpg',
  'projects/olympia/olympia-03.jpg',
];

const LinkList = styled('ul')(() => ({
  listStyle: 'none',
  padding: 0,
  textAlign: 'right',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  margin: 0,
}));

const LinkRowItem = styled('li')(({theme}) => ({
  '&+&': {
    paddingLeft: theme.spacing(1),
  },
}));

const LinkRow = ({
  title,
  href,
  children,
}: PropsWithChildren<{title: string; href: string}>) => (
  <LinkRowItem key={href}>
    <Link href={href} title={title}>
      {children}
    </Link>
  </LinkRowItem>
);

const Steam = styled('img')(() => ({
  width: 20,
  height: 20,
}));

export const SectionProjects = () => (
  <Grid container spacing={2}>
    <SectionHeader title="Shipped Projects" />
    <Grid container spacing={2}>
      <Paper sx={{p: 2}}>
        <Grid container spacing={1}>
          <Grid size={8}>
            <Typography typography="h3">
              Olympia: Festival of the Gods
            </Typography>
          </Grid>
          <Grid size={4} justifySelf={'flex-end'}>
            <LinkList>
              <LinkRow
                title="GitHub"
                href="https://github.com/TimPoliquin/unity-olympia-festival-of-the-gods"
              >
                <GitHub />
              </LinkRow>
              <LinkRow
                title="Steam"
                href="https://store.steampowered.com/app/3316450/Olympia_Festival_of_the_Gods/"
              >
                <Steam src="steam.png" alt="steam logo" />
              </LinkRow>
            </LinkList>
          </Grid>
          <Grid container direction="column" size={{xs: 12, md: 5}} spacing={2}>
            <Grid size={12}>
              <Typography typography="body1">
                Solo-Developed by Tim Poliquin
              </Typography>
            </Grid>
          </Grid>
          <Grid size={{xs: 12, lg: 7}}>
            <iframe
              title="Olympia Steam Embedd"
              src="https://store.steampowered.com/widget/3316450/"
              frameBorder="0"
              width="646"
              height="190"
            />
          </Grid>
          <Grid size={12}>
            <ImageList cols={3} rowHeight={256} gap={16}>
              {olympiaImages.map(image => (
                <ImageListItem key={image}>
                  <img
                    src={image}
                    alt="olympia gameplay"
                    loading="lazy"
                    style={{borderRadius: 4}}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);
