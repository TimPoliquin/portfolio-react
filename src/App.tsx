import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from "react";
import './App.css';
import AppAppBar from './components/AppAppBar';
import { SectionCoursework } from './sections/section-coursework/SectionCoursework';
import { SectionIntro } from './sections/section-intro/SectionIntro';
import { SectionProjects } from './sections/section-projects/SectionProjects';
import { SectionPrototypes } from './sections/section-prototypes/SectionPrototypes';
import AppTheme from "./theme/AppTheme";

function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <SectionIntro />
      <SectionProjects />
      <SectionPrototypes />
      <SectionCoursework />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >

      </Container>
    </AppTheme>
  );
}

export default App;
