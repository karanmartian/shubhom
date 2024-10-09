import Hero from '@/components/Hero';
import About from '@/components/About';
import Classes from '@/components/Classes';
import Trainers from '@/components/Trainers';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Trainers />
      <Contact />
    </main>
  );
}