import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';

export interface Media {
  component: React.ReactNode;
  key: string;
}

export const MediaCarousel = ({Media}: {Media: Media[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel
      animation="fade"
      height={337}
      autoPlay={false}
      navButtonsAlwaysVisible={Media.length > 1}
      navButtonsAlwaysInvisible={Media.length <= 1}
      indicators={Media.length > 1}
      onChange={now => {
        setCurrentSlide(now ?? 0);
      }}
    >
      {Media.map(({component: MediaItem}, idx) => (
        <Box key={idx} textAlign="center" hidden={idx !== currentSlide}>
          {MediaItem}
        </Box>
      ))}
    </Carousel>
  );
};
