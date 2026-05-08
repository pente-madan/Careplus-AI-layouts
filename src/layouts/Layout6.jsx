import React, { useState } from 'react';
import { Eye, Heart, Users, Activity, Stethoscope, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Layout6 Component - Immersive Gallery Carousel
 * Features a horizontal carousel showcasing healthcare facilities and services
 * Uses brand colors, AOS animations, and hover-effects.css for interactions
 */

// Gallery data with images and categories
const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Modern Facilities",
    category: "Infrastructure",
    icon: Building2
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Expert Care",
    category: "Medical Staff",
    icon: Stethoscope
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Advanced Technology",
    category: "Equipment",
    icon: Activity
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Patient-Centered",
    category: "Philosophy",
    icon: Heart
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Vision Care Excellence",
    category: "Specialties",
    icon: Eye
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Community Health",
    category: "Outreach",
    icon: Users
  }
];

const Layout6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const currentItem = galleryItems[currentIndex];
  const IconComponent = currentItem.icon;

  return (
    <div className="w-full bg-white">
      {/* Gallery Carousel Section */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-24 lg:py-32">
        {/* Background Elements */}
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-red-100/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-slate-200/30 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-16 flex flex-col items-center justify-center text-center" data-aos="fade-up">
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600" data-aos="fade-up" data-aos-delay="100">
              Experience Excellence
            </span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-delay="200">
              Where Care Meets <span className="text-red-600">Innovation</span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-600" data-aos="fade-up" data-aos-delay="300">
              Explore our state-of-the-art facilities and meet the dedicated professionals committed to your well-being.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative mx-auto max-w-6xl" data-aos="fade-up" data-aos-delay="400">
            {/* Main Carousel Card */}
            <div className="group card-lift relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="relative h-[500px] lg:h-[600px]">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="h-full w-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  {/* Icon Badge */}
                  <div className="icon-scale mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg ring-2 ring-white/20">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Category */}
                  <span className="mb-3 inline-block w-fit rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    {currentItem.category}
                  </span>

                  {/* Title */}
                  <h3 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                    {currentItem.title}
                  </h3>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white/80">
                      {currentIndex + 1} / {galleryItems.length}
                    </span>
                    <div className="h-px flex-1 bg-white/20">
                      <div 
                        className="h-full bg-red-600 transition-all duration-500"
                        style={{ width: `${((currentIndex + 1) / galleryItems.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute right-0 top-0 h-24 w-24 bg-red-600/0 transition-all duration-500 group-hover:bg-red-600/10" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="group flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg ring-1 ring-slate-200 transition-all hover:bg-red-600 hover:text-white hover:ring-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-red-600'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="group flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg ring-1 ring-slate-200 transition-all hover:bg-red-600 hover:text-white hover:ring-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout6;
