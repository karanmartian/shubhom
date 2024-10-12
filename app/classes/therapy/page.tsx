'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const YogaTherapy = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Yoga Therapy</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
          alt="Yoga Therapy Session"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits of Yoga Therapy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personalized approach to address specific health concerns</li>
            <li>Reduction in chronic pain and discomfort</li>
            <li>Improved flexibility and range of motion</li>
            <li>Enhanced mind-body connection</li>
            <li>Complementary support for traditional medical treatments</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Approach</h2>
          <p className="text-gray-700 mb-4">
            Our yoga therapy sessions are tailored to address individual health concerns and promote 
            overall well-being. Our certified yoga therapists work with you to create a personalized 
            practice that may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Specific asanas (poses) to target problem areas</li>
            <li>Breathing exercises to reduce stress and anxiety</li>
            <li>Meditation techniques for mental clarity</li>
            <li>Lifestyle and dietary recommendations</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Common Conditions We Address</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          <li>Back pain and sciatica</li>
          <li>Neck and shoulder tension</li>
          <li>Arthritis and joint pain</li>
          <li>Anxiety and depression</li>
          <li>Insomnia and sleep disorders</li>
          <li>Digestive issues</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          onClick={() => router.push('/book?type=therapy')}
        >
          Book a Therapy Session
        </Button>
      </div>
    </div>
  );
};

export default YogaTherapy;
