'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const HomePractice = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Home Yoga Practice</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000"
          alt="Home Yoga Practice"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of Home Practice</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Flexibility to practice at any time</li>
            <li>Personalized pace and intensity</li>
            <li>Privacy to explore and deepen your practice</li>
            <li>No commute or studio fees</li>
            <li>Integration of yoga into daily life</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What We Offer</h2>
          <p className="text-gray-700 mb-4">
            Our home practice program provides you with the tools and guidance to establish a 
            consistent yoga routine in your own space. We offer:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Detailed video tutorials for various poses and sequences</li>
            <li>Downloadable practice schedules for different levels</li>
            <li>Live Q&A sessions with experienced instructors</li>
            <li>A supportive online community of fellow practitioners</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          To begin your home practice journey:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
          <li>Sign up for our home practice program</li>
          <li>Set up a dedicated space in your home for yoga</li>
          <li>Choose a practice schedule that fits your lifestyle</li>
          <li>Start with our beginner-friendly sequences</li>
          <li>Gradually increase duration and complexity as you progress</li>
        </ol>
      </div>

      <div className="text-center mt-12">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          onClick={() => router.push('/book?type=home')}
        >
          Start Your Home Practice
        </Button>
      </div>
    </div>
  );
};

export default HomePractice;
