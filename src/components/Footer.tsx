import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">D&D Design Center</h3>
            <p className="text-neutral-400 dark:text-neutral-500 text-sm">
              Luxury European furniture and interior design services for
              discerning clients.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-neutral-400 dark:text-neutral-500 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 718-934-7100</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@dnddesigncenter.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                <span>2615 East 17th Street, Brooklyn, NY 11235</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <div className="space-y-2 text-neutral-400 dark:text-neutral-500 text-sm">
              <Link to="/" className="block hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="block hover:text-white transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400 dark:text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} D&D Design Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}