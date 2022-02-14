import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Header from './sections/Header';
import Hero from './sections/Hero';
import SectionPartner from './sections/SectionPartner';
import SectionFeatures from './sections/SectionFeatures';
import SectionRecommend from './sections/SectionRecommend';
import SectionFeedBack from './sections/SectionFeedback';
import SectionFunding from './sections/SectionFunding';
import SectionClassic from './sections/SectionClassic';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <SectionPartner />
      <SectionFeatures />
      <SectionRecommend />
      <SectionFeedBack />
      <SectionFunding />
      <SectionClassic />
    </ChakraProvider>
  );
}

export default App;