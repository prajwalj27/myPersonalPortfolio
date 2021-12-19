import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hey Everyone, I'm Prajwal Jaiswal and i'm currntly pursuing my B.E. in Computer Engineering. I'm passionate about Full-Stack development and also interested in working on many Machine Learning projects.    
        </SectionText>
        <Button onClick={() => window.location = '#about'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;