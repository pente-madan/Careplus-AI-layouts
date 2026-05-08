import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Layout1 Component - Hero Section
 * Displays the main hero section with asymmetrical two-column layout
 * Features personalized healthcare messaging and call-to-action buttons
 */
const Layout1 = () => {
  return (
    <div className="w-full bg-white">
      {/* Section 1: Asymmetrical Two-Column Hero */}
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-white font-sans">
        {/* Background Decorative Elements */}
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl filter" />
        <div className="absolute right-[5%] top-[20%] h-[300px] w-[300px] rounded-full bg-teal-50/60 blur-3xl filter" />

        {/* Main Container */}
        <div className="container mx-auto flex h-full min-h-[90vh] flex-col justify-center px-4 py-12 md:px-6 lg:py-20">
          <div className="grid h-full w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

            {/* Left Column (Content - 55%) */}
            <div className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pr-16">

              {/* Subtle Label */}
              <span className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600" data-aos="fade-up">
                Personalized Healthcare
              </span>

              {/* Headline */}
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl" data-aos="fade-up" data-aos-delay="100">
                Advanced medicine, <br />
                <span className="text-slate-900">compassionate care.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600" data-aos="fade-up" data-aos-delay="200">
                We combine cutting-edge diagnostics with a holistic approach to recovery, ensuring you feel supported at every stage of your health journey.
              </p>

              {/* CTAs */}
              <div className="mb-16 flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-delay="300">
                <button className="inline-flex h-14 items-center justify-center rounded-2xl bg-red-600 px-8 text-base font-semibold text-white shadow-lg shadow-red-600/10 transition-transform hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2">
                  Book Appointment
                </button>
                <button className="group inline-flex h-14 items-center justify-center rounded-2xl border border-transparent bg-white px-8 text-base font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">
                  Explore Services
                  <ArrowRight className="arrow-slide ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Micro-Sections (Bottom) */}
              <div className="-mt-4">
                {/* Shortened separator line */}
                <div className="mb-8 h-px w-24 bg-slate-200" />
              </div>
            </div>

            {/* Right Column (Visual - 45%) */}
            <div className="relative h-full min-h-[500px] w-full lg:col-span-5 lg:min-h-[700px]" data-aos="fade-left" data-aos-delay="400">
              {/* Visual Container */}
              <div className="absolute right-0 top-1/2 h-[90%] w-full -translate-y-1/2 md:w-[110%] lg:-left-[25%] lg:w-[135%]">

                {/* Main Image Mask */}
                <div className="group relative h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl shadow-slate-200/50">
                  <img
                    src="https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGRvY3RvciUyMHBhdGllbnQlMjBpbnRlcmFjdGlvbnxlbnwxfHx8fDE3NzAwMzkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Doctor discussing treatment with patient"
                    className="h-full w-full object-cover object-center opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                {/* Abstract Shape */}
                <div className="absolute -bottom-10 -right-10 -z-10 h-64 w-64 rounded-full bg-teal-100/50 blur-3xl" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout1;