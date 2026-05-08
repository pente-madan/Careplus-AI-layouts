import React from 'react';
import { ArrowRight, Heart, Shield, Users, Stethoscope, Activity, Microscope } from 'lucide-react';

/**
 * Layout5 Component - Light Theme Services Section
 * Displays a light theme section with service cards and brand-colored accents
 * Features professional service showcase with clean, static design
 */

// Service data
const services = [
  {
    title: "Cardiac Care",
    description: "Advanced cardiovascular treatments with cutting-edge technology and compassionate care."
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care with rapid response times and expert medical teams."
  },
  {
    title: "Family Medicine",
    description: "Comprehensive healthcare for all ages with personalized treatment plans."
  },
  {
    title: "Orthopedic Care",
    description: "Specialized treatment for musculoskeletal conditions and sports injuries."
  },
  {
    title: "Women's Health",
    description: "Dedicated care for women's health needs throughout all life stages."
  },
  {
    title: "Pediatric Care",
    description: "Specialized medical care for infants, children, and adolescents."
  }
];

// Service icon component
const ServiceIcon = ({ index, colorClass }) => {
  const icons = [Heart, Shield, Users, Stethoscope, Activity, Microscope];
  const IconComponent = icons[index] || Heart;

  return <IconComponent className={`h-6 w-6 ${colorClass}`} />;
};

const Layout5 = () => {
  return (
    <div className="w-full bg-white">
      {/* NEW SECTION: Light Theme Services */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-24 lg:py-32">
        {/* Abstract shapes */}
        <div className="absolute -mr-20 -mt-20 right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute -mb-20 -ml-20 bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="mb-20 flex flex-col items-center justify-center gap-8">
            <div className="max-w-2xl text-center">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-red-600">
                Why Families Choose Us
              </span>
              <h2 className="font-heading text-4xl font-bold text-slate-900 md:text-5xl">
                Excellence in every <span className="text-slate-900">detail.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {services.slice(0, 3).map((service, index) => (
                <div key={`feature-${index}`} className="group card-lift relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-slate-200">
                   <div className="mb-6 flex items-center justify-between">
                      <div className="icon-scale flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white ring-1 ring-red-300">
                         <div className="scale-90">
                            <ServiceIcon index={index} colorClass="" />
                         </div>
                      </div>
                      <span className="text-4xl font-bold text-red-600 transition-colors duration-300 group-hover:text-red-700">0{index + 1}</span>
                   </div>
                   <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-600">{service.title}</h3>
                   <p className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">{service.description}</p>
                </div>
             ))}

             {/* Additional Service Cards */}
             {services.slice(3, 6).map((service, index) => {
                const actualIndex = index + 3;
                return (
                <div key={`feature-${actualIndex}`} className="group card-lift relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-slate-200">
                   <div className="mb-6 flex items-center justify-between">
                      <div className="icon-scale flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white ring-1 ring-red-300">
                         <div className="scale-90">
                            <ServiceIcon index={actualIndex} colorClass="" />
                         </div>
                      </div>
                      <span className="text-4xl font-bold text-red-600 transition-colors duration-300 group-hover:text-red-700">0{actualIndex + 1}</span>
                   </div>
                   <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-600">{service.title}</h3>
                   <p className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">{service.description}</p>
                </div>
             )})}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout5;