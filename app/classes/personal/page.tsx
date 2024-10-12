'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const PersonalYogaClasses = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Personal Yoga Classes</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
          alt="Personal Yoga Class"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of Personal Yoga Classes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personalized approach to address your specific needs</li>
            <li>Flexibility to practice at any time</li>
            <li>Customized pace and intensity</li>
            <li>Privacy to explore and deepen your practice</li>
            <li>Integration of yoga into your daily life</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What We Offer</h2>
          <p className="text-gray-700 mb-4">
            Our personal yoga class program provides you with the tools and guidance to establish a 
            consistent yoga routine tailored to your individual needs. We offer:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>One-on-one sessions with experienced instructors</li>
            <li>Customized practice plans for different levels and goals</li>
            <li>Detailed video tutorials for various poses and sequences</li>
            <li>Regular progress assessments and plan adjustments</li>
            <li>Supportive guidance for your personal yoga journey</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          To begin your personal yoga journey:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
          <li>Book an initial consultation with one of our instructors</li>
          <li>Discuss your goals, experience level, and any health concerns</li>
          <li>Receive a customized practice plan</li>
          <li>Schedule your first personal session</li>
          <li>Gradually progress and adjust your practice as you grow</li>
        </ol>
      </div>

      <div className="text-center mt-12">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          onClick={() => router.push('/book?type=personal')}
        >
          Book Your Personal Class
        </Button>
      </div>
    </div>
  );
};

export default PersonalYogaClasses;
