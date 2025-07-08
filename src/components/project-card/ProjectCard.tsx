import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, {PropsWithChildren} from 'react';
import {styled} from '@mui/material/styles';
import Link from '@mui/material/Link';
import {Media, MediaCarousel} from '../media-carousel/MediaCarousel';
import {ContentCard} from '../content-card/ContentCard';
import {Divider, Tooltip} from '@mui/material';
import {CalendarMonth} from '@mui/icons-material';

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
    <Tooltip title={title}>
      <Link href={href} title={title} target="_blank" color="textPrimary">
        {children}
      </Link>
    </Tooltip>
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
            <Grid
              container
              size={3}
              justifySelf={'flex-end'}
              justifyContent="right"
              alignItems="center"
              textAlign="right"
              display="flex"
              direction="row"
              spacing={1}
            >
              <Typography color="textSecondary">Check it out:</Typography>
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
            <Grid size={6} flexGrow={0} flexShrink={1}>
              <Typography typography="h4" color="success">
                {subtitle}
              </Typography>
            </Grid>
          ) : null}
          {timeframe ? (
            <Grid
              size={6}
              flexGrow={1}
              flexShrink={0}
              justifyItems={'flex-end'}
            >
              <Grid
                container
                size={4}
                direction="row"
                spacing={1}
                border={1}
                paddingX={1}
                paddingY={0.5}
                borderRadius={1}
                textAlign="center"
                borderColor="rgb(255, 255, 255, .35)"
                wrap="nowrap"
                width="auto"
              >
                <Grid flexGrow={0} flexShrink={1} alignContent="center">
                  <Typography color="textSecondary">
                    <CalendarMonth />
                  </Typography>
                </Grid>
                <Grid
                  size={8}
                  flexGrow={1}
                  flexShrink={0}
                  alignContent="center"
                >
                  <Typography typography="caption" color="textSecondary" noWrap>
                    {timeframe}
                  </Typography>
                </Grid>
              </Grid>
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
