import React from 'react';
import Navbar from '../header/Navbar';
import HeroSection from '../sections/HeroSection';
import About from '../sections/About';
import ExploreSection from '../sections/ExploreSection';
import HowWork from '../sections/HowWork';
import WhatsNew from '../sections/WhatsNew';
import WorldSection from '../sections/WorldSection';
import Insights from '../sections/Insights';
import Testimonial from '../sections/Testimonial';
import Footer from '../sections/Footer';
import { ISectionData } from '@/shared/types';


const Homepage = ({data}:ISectionData[]) => {
  const sampleData={
    explore:data.filter((item:ISectionData)=>item.category==='explore world'),
    insights:data.filter((item:ISectionData)=>item.category==='insights'),
    newFeatures:data.filter((item:ISectionData)=>item.category==='new features'),
  }

  return (
    <>
    <Navbar />
    <HeroSection />
    <About />
    <ExploreSection explore={sampleData.explore}/>
    <HowWork />
    <WhatsNew newFeatures={sampleData.newFeatures} />
    <WorldSection />
    <Insights insights={sampleData.insights} />
    <Testimonial />
    <Footer />
    </>
  )
}

export default Homepage