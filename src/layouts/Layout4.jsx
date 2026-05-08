import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Layout4 Component - Healthy Eyes Section
 * Displays a vision care section with floating card design
 * Features responsive layout with image background and overlay content
 */
const Layout4 = () => {
  return (
    <div className="w-full bg-white">
      {/* New Section: Healthy Eyes - Card Moved Up */}
      <div className="bg-white relative w-full overflow-hidden border-t border-slate-50">

          {/* Desktop Layout */}
          <div className="hidden lg:flex relative mx-auto w-[1280px] h-[700px] items-center justify-start px-6 mb-[150px]">

              {/* Image Background Layer (Left Side) */}
              <div className="absolute left-0 top-[50px] w-[75%] h-[600px] rounded-[32px] overflow-hidden shadow-2xl">
                  <img
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Healthy Eyes"
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 pointer-events-none" />
              </div>

              {/* Floating Content Card (Right Side + Shifted Up + Wider) */}
              <div className="card-lift relative top-[180px] ml-auto mr-[-100px] w-[650px] bg-white/95 backdrop-blur-xl p-12 rounded-[24px] shadow-xl border border-white/50 flex flex-col gap-8" data-aos="fade-left" data-aos-delay="200">

                  {/* Decorative Header */}
                  <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="300">
                      <span className="text-red-600 font-bold tracking-[0.15em] text-xs uppercase">Vision Care</span>
                  </div>

                  <h2 className="text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight" data-aos="fade-up" data-aos-delay="400">
                      Healthy Eyes,<br/>
                      <span className="text-slate-900">Brighter Future.</span>
                  </h2>

                  <div className="" data-aos="fade-up" data-aos-delay="500">
                      <p className="text-slate-600 text-[18px] leading-[1.6]">
                          Experience precision eye care tailored to your lifestyle. We combine advanced technology with compassionate service to ensure you see the world clearly.
                      </p>
                  </div>

                  <button className="w-fit px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-[16px] overflow-hidden transition-all hover:shadow-lg hover:bg-red-700 flex items-center gap-3" data-aos="zoom-in" data-aos-delay="600">
                       Book Appointment <ArrowRight size={18} />
                  </button>
              </div>
          </div>

          {/* Mobile Layout (Fluid Stack) */}
          <div className="lg:hidden flex flex-col w-full" data-aos="fade-up">
              <div className="w-full h-[300px] relative">
                  <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Healthy Eyes" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 bg-white border-t border-slate-100 shadow-lg -mt-6 relative z-10 rounded-t-3xl mx-4" data-aos="fade-up" data-aos-delay="200">
                  <span className="text-red-600 font-bold tracking-[0.15em] text-xs uppercase block mb-2" data-aos="fade-up" data-aos-delay="300">Vision Care</span>
                  <h2 className="font-bold text-slate-900 text-4xl mb-2 tracking-tight" data-aos="fade-up" data-aos-delay="400">Healthy Eyes</h2>
                  <h2 className="font-bold text-slate-400 text-4xl mb-4 tracking-tight" data-aos="fade-up" data-aos-delay="400">Brighter Future</h2>

                  <p className="font-sans text-slate-600 text-lg leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="500">
                       Experience precision eye care tailored to your lifestyle.
                  </p>
                  <button className="w-full py-4 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors" data-aos="zoom-in" data-aos-delay="600">
                      Book Appointment
                  </button>
              </div>
              <div className="h-24 bg-white"></div>
          </div>

      </div>
    </div>
  );
};

export default Layout4;