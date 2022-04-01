import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Header from './sections/Header';
import Hero from './sections/Hero';
import SectionPartner from './sections/SectionPartner';
import SectionFeatures from './sections/SectionFeatures';
import SectionRecommend from './sections/SectionRecommend';
import SectionFeedBack from './sections/SectionFeedback';
import SectionHotFunding from './sections/SectionHotFunding';
import SectionFunding from './sections/SectionFunding';
import SectionClassic from './sections/SectionClassic';
import SectionContact from './sections/SectionContact';
import Member from './sections/member/Member';
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
      <SectionHotFunding />
      <SectionClassic />
      <SectionPartner />
      <Member />
      <SectionContact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
