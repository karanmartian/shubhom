import Link from 'next/link';
import { Facebook, FacebookIcon, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">ShubhOm</h3>
            <p className="text-sm">Your journey to inner peace and wellness starts here.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="/" className="hover:text-green-300">Home</Link></li>
              <li><Link href="#about" className="hover:text-green-300">About</Link></li>
              <li><Link href="#classes" className="hover:text-green-300">Classes</Link></li>
              <li><Link href="#trainers" className="hover:text-green-300">Trainers</Link></li>
              <li><Link href="#contact" className="hover:text-green-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Phone/Whatsapp: 7906259997</p>
            <p className="text-sm">Email: shubhomyog547@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100088671083795" className="text-white hover:text-green-300"><FacebookIcon /></a>
              <a href="https://www.instagram.com/shubhomyog" className="text-white hover:text-green-300"><Instagram /></a>
              <a href="https://www.youtube.com/@shubhomyog547" className="text-white hover:text-green-300"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 ShubhOm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;