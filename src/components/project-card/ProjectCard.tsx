import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, {PropsWithChildren} from 'react';
import {styled} from '@mui/material/styles';
import Link from '@mui/material/Link';
import {Media, MediaCarousel} from '../media-carousel/MediaCarousel';
import {ContentCard} from '../content-card/ContentCard';
import Box from '@mui/material/Box';
import {Divider} from '@mui/material';

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
  '& svg': {
    fill: theme.palette.text.secondary,
  },
  '&:hover svg': {
    fill: theme.palette.text.primary,
  },
}));

const LinkRow = ({
  title,
  href,
  children,
}: PropsWithChildren<{title: string; href: string}>) => (
  <LinkRowItem key={href}>
    <Link href={href} title={title} target="_blank" color="textPrimary">
      {children}
    </Link>
  </LinkRowItem>
);

export interface ExternalLink {
  Icon: React.ReactNode;
  href: string;
  title: string;
}

interface Props {
  title: string;
  subtitle?: string;
  timeframe?: string;
  links?: ExternalLink[];
  media?: Media[];
  Hero?: React.ReactNode;
  Footer?: React.ReactNode;
}
export const ProjectCard = ({
  title,
  subtitle,
  timeframe,
  links,
  Hero,
  media,
  Footer,
}: Props) => {
  return (
    <Grid container size={12} spacing={2}>
      <ContentCard sx={{width: '100%'}}>
        <Grid size={12} container spacing={1}>
          <Grid size={9}>
            <Typography typography="h3" color="success">
              {title}
            </Typography>
          </Grid>
          {links ? (
            <Grid size={3} justifySelf={'flex-end'}>
              <LinkList>
                {links.map(link => (
                  <LinkRow title={link.title} href={link.href}>
                    {link.Icon}
                  </LinkRow>
                ))}
              </LinkList>
            </Grid>
          ) : null}
          {subtitle ? (
            <Grid size={9}>
              <Typography typography="h4" color="success">
                {subtitle}
              </Typography>
            </Grid>
          ) : null}
          {timeframe ? (
            <Grid
              size={3}
              flexGrow={1}
              justifySelf={'flex-end'}
              textAlign="right"
            >
              <Box
                component="span"
                border={1}
                padding={0.5}
                paddingLeft={1}
                paddingRight={1}
                borderRadius={1}
                display="inline-block"
                minWidth={125}
                textAlign="center"
                borderColor="rgb(255, 255, 255, .35)"
              >
                <Typography typography="caption">{timeframe}</Typography>
              </Box>
            </Grid>
          ) : null}
          <Grid size={12}>
            <Divider />
          </Grid>
          {Hero ? (
            <Grid container direction="column" size={12} spacing={2}>
              <Grid size={12} justifyContent="center">
                {Hero}
              </Grid>
            </Grid>
          ) : null}
          {media ? (
            <>
              <Grid size={12} padding={2}>
                <MediaCarousel Media={media} />
              </Grid>
            </>
          ) : null}
          {Footer ? <Grid size={12}>{Footer}</Grid> : null}
        </Grid>
      </ContentCard>
    </Grid>
  );
};
