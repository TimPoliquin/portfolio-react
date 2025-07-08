import React from 'react';
import {Media} from '../components/media-carousel/MediaCarousel';
import Grid from '@mui/material/Grid';

const Img = ({src}: {src: string}) => (
  <Grid container size={12}>
    <Grid size={12} height={337} alignContent={'center'}>
      <img
        src={src}
        alt="fishing gameplay"
        loading="lazy"
        width="100%"
        style={{borderRadius: 4}}
      />
    </Grid>
  </Grid>
);

export const makeMedia = ({
  pathname,
  title,
  extension,
  size,
}: {
  pathname: string;
  title: string;
  extension: string;
  size: number;
}): Media[] =>
  Array(size)
    .fill(0)
    .map((_, idx) => ({
      key: `${title}-${idx}`,
      component: (
        <Img
          src={`${pathname}/${title}-${(idx + 1).toString().padStart(2, '0')}.${extension}`}
        />
      ),
    }));
