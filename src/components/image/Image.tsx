import React from 'react';
import {styled} from '@mui/material/styles';
import {SxProps} from '@mui/material';

const Img = styled('img')(() => ({
  borderRadius: 1,
}));
export const Image = ({
  src,
  alt,
  sx,
}: {
  alt: string;
  src: string;
  sx: SxProps;
}) => <Img src={src} alt={alt} loading="lazy" sx={sx} />;
