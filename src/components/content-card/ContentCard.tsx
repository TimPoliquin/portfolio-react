import React, {PropsWithChildren} from 'react';
import {Card, CardContent, SxProps} from '@mui/material';

interface Props {
  sx?: SxProps;
}

export const ContentCard = ({children, sx}: PropsWithChildren<Props>) => (
  <Card variant="outlined" sx={{...sx}}>
    <CardContent>{children}</CardContent>
  </Card>
);
