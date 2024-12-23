import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactSchema } from '../schemas/contactSchema';
import type { ContactFormData } from '../types';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    
    // Send data to the webhook
    try {
      await fetch('https://hook.us2.make.com/ihkrumncyrob5zfmnt1veb3trb5if0qz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error sending data to the webhook:', error);
    }

    reset();
    alert('Thank you for your message. We will contact you soon!');
  };

  return (
    <div className="pt-16">
      {/* Contact Header */}
      <section className="relative py-24 bg-neutral-100 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-serif text-neutral-900 dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Ready to transform your space? Get in touch with our team of design experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-serif text-neutral-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif text-neutral-900 dark:text-white mb-6">
                  Visit Our Showroom
                </h2>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                    <MapPin className="flex-shrink-0" />
                    2615 East 17th Street, Brooklyn, NY 11235
                  </p>
                  <p className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                    <Phone className="flex-shrink-0" />
                    +1 718-934-7100
                  </p>
                  <p className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300">
                    <Mail className="flex-shrink-0" />
                    info@dnddesigncenter.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-neutral-900 dark:text-white mb-4">
                  Hours of Operation
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                  <p>Saturday: 11:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              {/* Google Maps Iframe Container */}
              <div className="mt-8 h-64 bg-neutral-100 rounded-lg">
                <iframe
                  title="D&D Design Center Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8476373170565!2d-73.95043268459374!3d40.58885977934824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245061f9e6ec3%3A0xe4c124faca084db2!2s2615%20E%2017th%20St%2C%20Brooklyn%2C%20NY%2011235!"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
