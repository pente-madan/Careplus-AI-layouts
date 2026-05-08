import React from 'react';
import { ArrowRight, HeartHandshake, Star, Microscope } from 'lucide-react';

/**
 * Layout3 Component - Diagonal Split Hero
 * Displays a diagonal split layout with compassionate care and medical excellence
 * Features a centered connector element and contrasting design approaches
 */
const Layout3 = () => {
  return (
    <div className="w-full bg-white">
      {/* Section 2: Diagonal Split Hero */}
      <section className="relative w-full overflow-hidden bg-white pb-20 pt-10">
        <div className="relative flex min-h-[700px] w-full flex-col lg:flex-row">

          {/* Connector Element (Absolute Centered) */}
          <div className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 transform lg:flex">
             <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-red-600 shadow-xl ring-1 ring-slate-900/5">
                <HeartHandshake className="h-8 w-8 text-white" />
             </div>
          </div>

          {/* Left Panel: Compassionate Care */}
          <div className="relative flex w-full flex-col justify-center bg-slate-900 py-20 lg:w-1/2 lg:py-0">
             {/* Diagonal Clip Background */}
             <div
               className="absolute inset-0 z-0 bg-slate-900 lg:-right-[100px] lg:w-[calc(100%+100px)] lg:[clip-path:polygon(0_0,100%_0,calc(100%-120px)_100%,0%_100%)]"
             >
                {/* Subtle Abstract Texture */}
                <div className="absolute inset-0 opacity-20"
                     style={{
                        backgroundImage: 'radial-gradient(circle at 0% 0%, #2dd4bf 0%, transparent 40%), radial-gradient(circle at 100% 100%, #0f172a 0%, transparent 40%)'
                     }}
                />
                {/* Noise/Grain */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
             </div>

             <div className="container relative z-10 mx-auto px-4 lg:max-w-md lg:pr-12 lg:text-right">
                <div className="flex flex-col items-start lg:items-end">
                  <span className="mb-4 inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-medium text-red-400 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
                    <Star className="mr-1.5 h-3 w-3" />
                    Patient First
                  </span>
                  <h2 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl" data-aos="fade-up" data-aos-delay="200">
                    Compassionate <br /> Care
                  </h2>
                  <p className="mb-8 max-w-sm text-lg text-slate-300 lg:text-right" data-aos="fade-up" data-aos-delay="300">
                    We listen, we care, and we walk with you. Experience a level of empathy that makes healing feel natural.
                  </p>
                  <button className="inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-6 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" data-aos="zoom-in" data-aos-delay="400">
                    Book Appointment
                  </button>
                </div>
             </div>
          </div>

          {/* Right Panel: Medical Excellence */}
          <div className="relative flex w-full flex-col justify-center bg-slate-50 py-20 lg:w-1/2 lg:py-0" data-aos="fade-left" data-aos-delay="200">
             {/* Background Geometric Pattern */}
             <div className="absolute inset-0 z-0 opacity-[0.4]"
                style={{
                  backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                  backgroundSize: '32px 32px'
                }}
             />

             <div className="container relative z-10 mx-auto px-4 lg:max-w-md lg:pl-12">
               <div className="flex flex-col items-start">
                  <span className="mb-4 inline-flex items-center rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600" data-aos="fade-up" data-aos-delay="300">
                    <Microscope className="mr-1.5 h-3 w-3" />
                    World-Class Tech
                  </span>
                  <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl" data-aos="fade-up" data-aos-delay="400">
                    Advanced <br /> Expertise
                  </h2>
                  <p className="mb-8 max-w-sm text-lg text-slate-500" data-aos="fade-up" data-aos-delay="500">
                    Leveraging breakthrough technology and specialist knowledge to deliver precise, effective treatments.
                  </p>
                  <button className="group inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:text-slate-900" data-aos="zoom-in" data-aos-delay="600">
                    Explore Services
                    <ArrowRight className="arrow-slide ml-2 h-4 w-4" />
                  </button>
               </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Layout3;