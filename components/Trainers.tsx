import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const trainersData = [
  {
    name: 'Shubham',
    specialty: 'Lead Yoga Instructor',
    description: 'With over a decade of experience in various yoga styles, Shubham brings a wealth of knowledge and a holistic approach to every class.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Experience',
    specialty: 'Diverse Yoga Styles',
    description: 'Our classes cover a wide range of yoga styles, from gentle Hatha to dynamic Vinyasa, ensuring there\'s something for every practitioner at every level.',
    image: 'https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Personal Attention',
    specialty: 'Individualized Guidance',
    description: 'We believe in providing personalized attention to each student, helping you deepen your practice and achieve your individual yoga goals.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Lead Yoga Instructor</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainersData.map((trainer, index) => (
            <Card key={index} className="overflow-hidden border-green-200">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-green-700">{trainer.name}</CardTitle>
                <CardDescription className="font-semibold">{trainer.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>{trainer.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
