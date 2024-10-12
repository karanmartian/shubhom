import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
];

const Classes = () => {
  return (
    <section id="classes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classesData.map((yogaClass, index) => (
            <Card key={index} className="overflow-hidden border-green-200">
              <Image
                src={yogaClass.image}
                alt={yogaClass.title}
                width={500} // Adjust based on your needs
                height={300} // Adjust based on your needs
                layout="responsive"
              />
              <CardHeader>
                <CardTitle className="text-green-700">{yogaClass.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{yogaClass.description}</CardDescription>
                <Link href={`/book?type=${yogaClass.type}`} passHref>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
