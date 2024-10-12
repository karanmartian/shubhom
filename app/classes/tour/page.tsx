'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const YogaTour = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Yoga Tour Experience</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
          alt="Yoga Tour"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Choose a Yoga Tour?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Immerse yourself in yoga practice in inspiring locations</li>
            <li>Combine travel with personal growth and wellness</li>
            <li>Experience different cultures and traditions</li>
            <li>Connect with like-minded individuals from around the world</li>
            <li>Deepen your practice with intensive, focused sessions</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What to Expect</h2>
          <p className="text-gray-700 mb-4">
            Our yoga tours offer a unique blend of travel, cultural experiences, and intensive yoga practice. 
            Each tour includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Daily yoga and meditation sessions</li>
            <li>Accommodation in carefully selected, peaceful locations</li>
            <li>Healthy, locally-sourced meals</li>
            <li>Cultural excursions and activities</li>
            <li>Free time for personal exploration and relaxation</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Upcoming Tours</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          <li>Bali Bliss Retreat: June 15-22, 2024</li>
          <li>Himalayan Yoga Adventure: September 1-10, 2024</li>
          <li>Costa Rica Jungle Yoga: November 5-12, 2024</li>
          <li>Greek Islands Yoga Sailing: May 20-27, 2025</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          onClick={() => router.push('/book?type=tour')}
        >
          Book Your Yoga Tour
        </Button>
      </div>
    </div>
  );
};

export default YogaTour;
