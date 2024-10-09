import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-green-900 opacity-50 z-10"></div>
      <div className="relative z-20 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to ShubhOm</h1>
        <p className="text-xl md:text-2xl mb-8">Discover inner peace and transform your body with our expert-led yoga classes</p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
          Start Your Journey
        </Button>
      </div>
    </section>
  );
};

export default Hero;