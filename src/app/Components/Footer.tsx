import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Image src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" width={100} height={50}/></Link></li>
            <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Image src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" width={100} height={50}/></Link></li>
            <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" width={100} height={50}/></Link></li>
            <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Image src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" width={100} height={50}/></Link></li>
          </ul>
        </div>

      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
