import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Navbar from './home/partials/navbar';
import Hero from './home/partials/hero';
import Main from './home/partials/main-content';
import Skillset from './home/partials/skillset';
import Exp from './home/partials/exp';
import Portfolio from './home/partials/portfolio';
import WorkExp from './home/partials/work-exp';
import Testimony from './home/partials/testimony';
import Faq from './home/partials/faq';
import ContactSection from './home/partials/contact-section';
import Footer from './home/partials/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Skillset />
      <Exp />
      <Portfolio />
      <div className='relative overflow-hidden'>
        <WorkExp />
        <Testimony />
        <Image
          src='/images/Group-3.png'
          alt='snake'
          width={1440}
          height={2254}
          className='absolute top-[60%] right-5 scale-300 -rotate-24 object-cover md:right-200 md:translate-x-1/2 md:scale-200 md:rotate-0 lg:top-0 lg:right-1/2 lg:scale-100'
        />
      </div>

      <Faq />
      <ContactSection />
      <Footer />
    </div>
  );
}
