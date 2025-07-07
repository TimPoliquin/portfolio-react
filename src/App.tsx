import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import {SectionCoursework} from './sections/section-coursework/SectionCoursework';
import {SectionIntro} from './sections/section-intro/SectionIntro';
import {SectionProjects} from './sections/section-projects/SectionProjects';
import {SectionPrototypes} from './sections/section-prototypes/SectionPrototypes';
import AppTheme from './theme/AppTheme';

function App(props: {disableCustomTheme?: boolean}) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Container
        component="main"
        maxWidth="xl"
        sx={{paddingTop: 2, paddingBottom: 2, paddingLeft: 0, paddingRight: 0}}
      >
        <SectionIntro />
        <SectionProjects />
        <SectionPrototypes />
        <SectionCoursework />
      </Container>
    </AppTheme>
  );
}

export default App;
