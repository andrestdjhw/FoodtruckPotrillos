<?php
/**
 * Template Name: Contact
 */

get_header(); ?>

<!-- HERO -->
<section class="bg-[#0f0f0f] pt-32 pb-16">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <p class="text-xs font-bold tracking-widest text-[#e8a020] uppercase mb-3">
      Get in Touch
    </p>
    <h1 class="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
      We'd Love to Hear from You
    </h1>
    <p class="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
      Have a question about our menu, our location, or anything else?
      Send us a message and we'll get back to you within 24 hours.
    </p>
  </div>
</section>

<!-- CONTACT BODY -->
<section class="bg-stone-50 py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

      <!-- LEFT — Contact Info -->
      <div class="w-full lg:w-5/12 shrink-0">

        <h2 class="text-xl font-black text-gray-900 mb-6">Contact Information</h2>

        <ul class="flex flex-col gap-6 mb-10">

          <!-- Phone -->
          <li class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-[#c0392b]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold tracking-widest text-gray-500 uppercase mb-0.5">Phone</p>
              <a href="tel:+12675966092" class="text-sm font-semibold text-gray-900 hover:text-[#c0392b] transition-colors">
                (267) 596-6092
              </a>
            </div>
          </li>

          <!-- Email -->
          <li class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-[#c0392b]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold tracking-widest text-gray-500 uppercase mb-0.5">Email</p>
              <a href="mailto:info@restaurantpotrillos.com" class="text-sm font-semibold text-gray-900 hover:text-[#c0392b] transition-colors">
                info@restaurantpotrillos.com
              </a>
            </div>
          </li>

          <!-- WhatsApp -->
          <li class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.855L0 24l6.293-1.494A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.374l-.359-.213-3.72.883.934-3.613-.234-.372A9.78 9.78 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold tracking-widest text-gray-500 uppercase mb-0.5">WhatsApp</p>
              <a
                href="https://wa.me/12675966092"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
              >
                Message us on WhatsApp →
              </a>
            </div>
          </li>

          <!-- Address -->
          <li class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-[#c0392b]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold tracking-widest text-gray-500 uppercase mb-0.5">Location</p>
              <a
                href="https://maps.google.com/?q=4200+G+St,+Philadelphia,+PA+19124"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-semibold text-gray-900 hover:text-[#c0392b] transition-colors"
              >
                4200 G St, Philadelphia, PA 19124
              </a>
              <p class="text-xs text-gray-500 mt-0.5">Mon–Sat: 10am – 9pm · Sunday: Closed</p>
            </div>
          </li>

        </ul>

        <!-- Map -->
        <div class="rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.3!2d-75.0987!3d39.9987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4200+G+St%2C+Philadelphia%2C+PA+19124!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="240"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Los Potrillos Food Truck Location"
          ></iframe>
        </div>

      </div>

      <!-- RIGHT — React Form -->
      <div class="w-full lg:w-7/12">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <h2 class="text-xl font-black text-gray-900 mb-1">Send Us a Message</h2>
          <p class="text-xs text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
          <div id="contact-form-root"></div>
        </div>
      </div>

    </div>
  </div>
</section>

<?php get_footer(); ?>