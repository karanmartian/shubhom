import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

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
            <p className="text-sm">123 Zen Street, Harmony City, 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@shubhom.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300"><Facebook /></a>
              <a href="#" className="text-white hover:text-green-300"><Twitter /></a>
              <a href="#" className="text-white hover:text-green-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 ShubhOm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;