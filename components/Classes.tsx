'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const classesData = [
  {
    title: 'Online Classes',
    description: 'Join our expert-led yoga sessions from the comfort of your home. Perfect for busy schedules and remote practitioners.',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    type: 'online',
  },
  {
    title: 'Offline Classes',
    description: 'Experience the energy of in-person yoga at our studio. Benefit from hands-on adjustments and a supportive community atmosphere.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    type: 'offline',
  },
  {
    title: 'Home Practice',
    description: 'Develop your personal yoga routine with our guided home practice resources. Flexible and adaptable to your space and time.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    type: 'home',
  },
  {
    title: 'Yoga Therapy',
    description: 'Specialized sessions focusing on healing and managing various body pains. Ideal for those with back pain, shoulder issues, neck discomfort, and other types of body pain.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    type: 'therapy',
  },
  {
    title: 'Yoga Tour',
    description: 'Immerse yourself in yoga while exploring beautiful destinations. Combine your practice with travel for a truly transformative experience.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    type: 'tour',
  },
  {
    title: 'Corporate Yoga',
    description: 'Bring wellness to your workplace with our tailored corporate yoga programs. Boost employee productivity, reduce stress, and promote a healthier work environment.',
    image: 'https://images.unsplash.com/photo-1517637633369-e4cc28755e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    type: 'corporate',
  },
];

const Classes = () => {
  const router = useRouter();

  return (
    <section id="classes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classesData.map((yogaClass, index) => (
            <Card key={index} className="overflow-hidden border-green-200">
              <div className="relative w-full h-48">
                <Image
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-green-700">{yogaClass.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{yogaClass.description}</CardDescription>
                <div className="flex justify-between mt-4">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => router.push(`/classes/${yogaClass.type}`)}
                  >
                    Learn More
                  </Button>
                  <Link href={`/book?type=${yogaClass.type}`} passHref>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
