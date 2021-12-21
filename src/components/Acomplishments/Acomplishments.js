import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: '3rd', text: 'Civo Hackathon 2021 (12-14th Nov)'},
  { title: 'Finalists', text: 'Manthan 2021 National Hackathon', },
  // { title: 'blah', text: 'Some Achievement', },
  // { title: 'lol', text: 'Some Other Achievement', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.title}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
