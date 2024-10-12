'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const CorporateYoga = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Corporate Yoga Programs</h1>
      
      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1517637633369-e4cc28755e01?auto=format&fit=crop&q=80&w=1000"
          alt="Corporate Yoga Session"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits for Your Company</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Increased employee productivity and focus</li>
            <li>Reduced stress and burnout</li>
            <li>Improved employee health and well-being</li>
            <li>Enhanced team building and company culture</li>
            <li>Decreased healthcare costs and absenteeism</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Corporate Offerings</h2>
          <p className="text-gray-700 mb-4">
            We provide tailored yoga programs to suit your company needs and schedule. Our services include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>On-site yoga classes at your office</li>
            <li>Virtual yoga sessions for remote teams</li>
            <li>Workshops on stress management and mindfulness</li>
            <li>Customized wellness challenges and programs</li>
            <li>Executive one-on-one yoga coaching</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
          <li>Initial consultation to understand your company needs</li>
          <li>Customized program design</li>
          <li>Instructor assignment and scheduling</li>
          <li>Regular feedback and program adjustments</li>
          <li>Measurable results and reporting</li>
        </ol>
      </div>

      <div className="text-center mt-12">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          onClick={() => router.push('/book?type=corporate')}
        >
          Inquire About Corporate Yoga
        </Button>
      </div>
    </div>
  );
};

export default CorporateYoga;
