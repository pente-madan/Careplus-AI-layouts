import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

/**
 * Layout2 Component - Contact Form Section
 * Displays the contact form layout with image and form columns
 * Features a professional contact form with validation-ready inputs
 */
const Layout2 = () => {
  return (
    <div className="w-full bg-white">
      {/* Section 2: Contact Form Layout */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:py-24 bg-slate-50">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left Column: Visual (50%) */}
          <div className="relative flex flex-col justify-between lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-2xl shadow-slate-200/50">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                alt="Healthcare professional consulting with patient"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Contact Form (50%) */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="mb-10">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Contact Us
              </span>
              <h2 className="mb-4 font-heading text-4xl font-bold leading-tight text-slate-900">
                Let's start the conversation.
              </h2>
              <p className="text-lg text-slate-600">
                Schedule a consultation or ask us anything. Our team typically responds within 2 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-slate-900">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Jane"
                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-slate-900">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Doe"
                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-900">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 pl-11 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900"
                  />
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-900">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-slate-900"
                />
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Layout2;