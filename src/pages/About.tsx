import React from 'react';
import { motion } from 'framer-motion';
import { values } from '../data/values';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-neutral-100 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-serif text-neutral-900 dark:text-white mb-6">
              About D&D Design Center
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              For over two decades, D&D Design Center has been at the forefront of luxury interior design,
              bringing European elegance and sophistication to discerning clients across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
                alt="Interior Design Studio"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-800 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-serif text-neutral-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Founded with a passion for exceptional design and a commitment to quality,
                D&D Design Center has evolved into a premier destination for luxury interior solutions.
                Our journey began with a simple vision: to bring the finest European furniture and design
                expertise to our clients.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Today, we continue to push the boundaries of design excellence, combining traditional
                craftsmanship with contemporary innovation to create spaces that inspire and endure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif text-neutral-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              These core principles guide every project and interaction at D&D Design Center.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-serif text-neutral-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}