'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const OnlineClasses = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Online Yoga Classes</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000"
          alt="Online Yoga Class"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of Online Yoga</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Practice from the comfort of your home</li>
            <li>Flexible scheduling to fit your lifestyle</li>
            <li>Access to expert instructors regardless of location</li>
            <li>Variety of class styles and difficulty levels</li>
            <li>Reduced stress and improved mental clarity</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What to Expect</h2>
          <p className="text-gray-700 mb-4">
            Our online yoga classes offer a comprehensive yoga experience, tailored for practice at home. 
            Each session is led by experienced instructors who guide you through poses, breathing exercises, 
            and meditation techniques. Classes are suitable for all levels, from beginners to advanced practitioners.
          </p>
          <p className="text-gray-700">
            You will need a quiet space, a yoga mat, and an internet-connected device to join. Optional props like 
            blocks or straps can enhance your practice, but are not required.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Class Schedule</h2>
        <p className="text-gray-700 mb-4">
          We offer a variety of online classes throughout the week. Here is a sample of our schedule:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          <li>Monday & Wednesday: Vinyasa Flow (7:00 AM - 8:00 AM)</li>
          <li>Tuesday & Thursday: Gentle Yoga (6:00 PM - 7:00 PM)</li>
          <li>Friday: Power Yoga (5:30 PM - 6:30 PM)</li>
          <li>Saturday: Yoga for Beginners (10:00 AM - 11:00 AM)</li>
          <li>Sunday: Restorative Yoga (4:00 PM - 5:00 PM)</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          onClick={() => router.push('/book?type=online')}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default OnlineClasses;
