'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const OfflineClasses = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">In-Studio Yoga Classes</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=1000"
          alt="In-Studio Yoga Class"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of In-Studio Yoga</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Direct interaction with experienced instructors</li>
            <li>Hands-on adjustments for proper alignment</li>
            <li>Energizing group atmosphere</li>
            <li>Access to studio props and equipment</li>
            <li>Opportunity to connect with like-minded individuals</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What to Expect</h2>
          <p className="text-gray-700 mb-4">
            Our in-studio yoga classes provide an immersive yoga experience in a serene and welcoming environment. 
            Classes are led by skilled instructors who offer personalized guidance and adjustments. Whether you are 
            a beginner or an experienced yogi, you will find classes suited to your level and goals.
          </p>
          <p className="text-gray-700">
            We provide mats and props, but feel free to bring your own if you prefer. Wear comfortable, breathable 
            clothing and arrive a few minutes early to settle in before class begins.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Studio Location & Hours</h2>
        <p className="text-gray-700 mb-4">
          Our studio is located at: 123 Yoga Street, Zen City, YG 12345
        </p>
        <p className="text-gray-700 mb-8">
          Studio hours: Monday - Friday: 6:00 AM - 9:00 PM, Saturday - Sunday: 8:00 AM - 6:00 PM
        </p>
      </div>

      <div className="text-center mt-12">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          onClick={() => router.push('/book?type=offline')}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default OfflineClasses;
