import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import {SectionCoursework} from './sections/section-coursework/SectionCoursework';
import {SectionIntro} from './sections/section-intro/SectionIntro';
import {SectionProjects} from './sections/section-projects/SectionProjects';
import {SectionPrototypes} from './sections/section-prototypes/SectionPrototypes';
import AppTheme from './theme/AppTheme';
import {SectionOther} from './sections/section-other/SectionOther';
import {ContactCard} from './sections/section-intro/ContactCard';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import {AboutMe} from './sections/section-intro/AboutMe';
import {ContentCard} from './components/content-card/ContentCard';

function App(props: {disableCustomTheme?: boolean}) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Grid
        container
        component="main"
        maxWidth="lg"
        size={12}
        spacing={2}
        sx={{paddingTop: 2, paddingBottom: 2, paddingLeft: 0, paddingRight: 0}}
      >
        <Grid container size={{xs: 12, lg: 4}} spacing={2} direction="column">
          <Grid size={12} flexShrink={0}>
            <ContentCard>
              <AboutMe />
            </ContentCard>
          </Grid>
          <Grid size={12} flexShrink={0}>
            <ContactCard />
          </Grid>
        </Grid>
        <Grid size={{xs: 12, lg: 8}}>
          <SectionIntro />
          <SectionProjects />
          <SectionPrototypes />
          <SectionCoursework />
          <SectionOther />
          <Grid container size={12} spacing={2} sx={{marginTop: 4}}>
            <ContactCard>
              <Typography typography="paragraph" color="textSecondary">
                Please reach out if you have any questions or development needs!
                I'm happy to contribute to projects big or small, and I'd love
                to discuss how my skills can be of use to you!
              </Typography>
            </ContactCard>
          </Grid>
        </Grid>
      </Grid>
    </AppTheme>
  );
}

export default App;
