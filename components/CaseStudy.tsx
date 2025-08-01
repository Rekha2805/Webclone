
'use client';

import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  { title: 'AQUA SPROUT LLC', image: '/assets/aqua.jpg',path:'/cases/aqua-sprout-llc' },
  { title: 'FISHER BUSINESS MANAGEMENT', image: '/assets/fisher.jpg',path:'/cases/fisher-business' },
  { title: 'GOLDEN CROWN PANADERIA', image: '/assets/golden.jpg',path:'/cases/golden-crown'},
  { title: 'MARK ARON', image: '/assets/markaron.jpg',path:'/cases/mark-aron' },
  { title: 'COE & COE', image: '/assets/coe&coe.jpg',path:'/cases/coe-and-coe' },
  { title: 'FAIR PATTERN', image: '/assets/fairpattern.jpg',path:'/cases/fair-pattern' },
  { title: 'NYC', image: '/assets/nyc.jpg',path:'/cases/nyc' },
  { title: 'THE NAKED DOG SHOP', image: '/assets/nakeddog.jpg',path:'/cases/naked-dog-shop' },
];

export default function CaseStudies() {
  return (
    <section className="bg-white text-gray-900 max-w-7xl mx-auto py-16 px-11">
    
      {/* Section Header */}
      <div className="mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-[#FFD369]"></div>
            <h6 className="uppercase text-sm tracking-widest text-[#FFD369] font-semibold">
                Our Case Studies
            </h6>
            </div>
          </div>

        <h2 className="text-5xl font-bold mb-12 pt-2">Few maybe of relevance to you</h2>

      {/* Grid of Cards */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="relative group h-48 md:h-56 lg:h-64 overflow-hidden shadow-md hover:shadow-xl transition duration-500 cursor-pointer"
          >
            {/* Background Image */}
            <Link href={item.path}><Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-500 opacity-0 group-hover:opacity-60 transition duration-500"></div>

            {/* Title Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-center font-bold text-sm md:text-base z-10 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-md">
                {item.title}
              </p>
            </div>

            {/* White border: low opacity by default, expands from center on hover */}
            <div className="absolute inset-0 rounded-lg border-2 border-white opacity-20 group-hover:opacity-100 scale-0 group-hover:scale-50 origin-center transition-all duration-100 ease-out pointer-events-none"></div>
          </Link></div>
        ))}
      </div>
    </section>
  );
}