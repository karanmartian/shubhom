'use client';

import { useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/useToast';

const BookingForm = () => {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    classType: initialType,
    message: '',
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, classType: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          id: 1,
          title: "Booking Submitted",
          description: "We've received your booking request. We'll get back to you soon!",
        });
        setFormData({ name: '', phone: '', email: '', classType: '', message: '' });
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      toast({
        id: 2,
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Book Your Yoga Class</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <label htmlFor="classType" className="block text-sm font-medium text-gray-700">Class Type</label>
              <Select onValueChange={handleSelectChange} value={formData.classType}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a class type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online Classes</SelectItem>
                  <SelectItem value="offline">Offline Classes</SelectItem>
                  <SelectItem value="home">Home Practice</SelectItem>
                  <SelectItem value="therapy">Yoga Therapy</SelectItem>
                  <SelectItem value="tour">Yoga Tour</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Booking Message</label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1" />
            </div>
          </div>
          <Button type="submit" className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
            Submit Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
