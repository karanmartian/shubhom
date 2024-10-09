import Image from 'next/image';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Yoga practice"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-green-800">About ShubhOm</h2>
            <p className="text-gray-700 mb-6">
              At ShubhOm, we believe in the transformative power of yoga. Our studio is a sanctuary
              where you can escape the stresses of daily life and focus on your physical and mental
              well-being. With expert instructors and a variety of classes, we cater to all levels
              of experience and help you achieve your personal yoga goals.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;