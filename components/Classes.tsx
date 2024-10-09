import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const classesData = [
  {
    title: 'Hatha Yoga',
    description: 'A gentle introduction to the most basic yoga postures.',
    image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Vinyasa Flow',
    description: 'A dynamic practice that connects movement with breath.',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Yin Yoga',
    description: 'A slow-paced style of yoga with seated postures held for longer periods.',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classesData.map((yogaClass, index) => (
            <Card key={index} className="overflow-hidden border-green-200">
              <img
                src={yogaClass.image}
                alt={yogaClass.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-green-700">{yogaClass.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{yogaClass.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;