'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z.string().max(1000, 'Message cannot exceed 1000 characters'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const result = await response.json();
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`w-full px-4 py-2 bg-white/10 border ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={5}
              className={`w-full px-4 py-2 bg-white/10 border ${
                errors.message ? 'border-red-500' : 'border-gray-600'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
              placeholder="Your message here..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#ffffff] hover:bg-[#dadada] text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2">
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Status Messages */}
          {submitStatus.message && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 text-green-500'
                  : 'bg-red-500/10 text-red-500'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
