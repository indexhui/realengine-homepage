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
import Footer from './sections/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />

      <SectionFeatures />
      <SectionRecommend />
      <SectionFeedBack />
      <SectionFunding />
      <SectionClassic />
      <SectionPartner />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
