import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React, {PropsWithChildren} from 'react';
import {styled} from '@mui/material/styles';
import Link from '@mui/material/Link';
import {CardContent} from '@mui/material';
import {Media, MediaCarousel} from '../media-carousel/MediaCarousel';

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
  links?: ExternalLink[];
  Hero?: React.ReactNode;
  Media?: Media[];
  Footer?: React.ReactNode;
}
export const ProjectCard = ({
  title,
  subtitle,
  links,
  Hero,
  Media,
  Footer,
}: Props) => {
  return (
    <Grid container size={12} spacing={2}>
      <Card sx={{width: '100%'}}>
        <CardContent>
          <Grid size={12} container spacing={1}>
            <Grid size={9}>
              <Typography typography="h3">{title}</Typography>
              {subtitle ? (
                <Typography typography="h4">{subtitle}</Typography>
              ) : null}
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
            {Hero ? (
              <Grid container direction="column" size={12} spacing={2}>
                <Grid size={12} justifyContent="center">
                  {Hero}
                </Grid>
              </Grid>
            ) : null}
            {Media ? (
              <>
                <Grid size={12}>
                  <Typography typography={'h4'}>Media</Typography>
                </Grid>
                <Grid size={12} padding={2}>
                  <MediaCarousel Media={Media} />
                </Grid>
              </>
            ) : null}
            {Footer ? <Grid size={12}>{Footer}</Grid> : null}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
