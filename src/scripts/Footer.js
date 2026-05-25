import React from "react"

const POS_URL        = "https://los-potrillos-food-truck.cloveronline.com/"
const RESTAURANT_URL = "https://restaurant.restaurantpotrillos.com/"

function Footer() {
  return (
    <>
      {/* ══════════════════════════════════════════
          RESTAURANT MINI-BLOCK
      ══════════════════════════════════════════ */}
      <section className="bg-stone-50 border-t border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">

            <div className="w-full sm:w-48 sm:shrink-0 rounded-xl overflow-hidden shadow-sm">
              <img
                src="/wp-content/uploads/2026/05/FoodTruck-scaled-1.jpg"
                alt="Los Potrillos Restaurant"
                className="w-full h-44 sm:h-36 object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs font-bold tracking-widest text-[#c0392b] uppercase mb-1">
                Also visit our restaurant
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Looking for the Full Sit-Down Experience?
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Our Port Richmond restaurant serves the same Puebla recipes in a full dine-in setting at 2617 E Venango St.
              </p>
              <a
                href={RESTAURANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#c0392b] hover:underline"
              >
                Visit the restaurant →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-[#c0392b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-tight">
            Hungry Yet? Come Find Us at 4200 G Street.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={POS_URL}
              className="w-full sm:w-auto bg-white text-[#c0392b] font-black text-sm px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            >
              ORDER NOW →
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-black text-sm px-8 py-3.5 rounded-full hover:bg-white hover:text-[#c0392b] transition-colors"
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-[#111111] text-gray-400 pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* COL 1 — Brand */}
            <div>
              <a href="/" className="inline-block mb-4">
                <img src="/wp-content/uploads/2026/05/PotrillosNegativeBrandLogo-scaled-1.png" alt="Los Potrillos Food Truck" className="h-14 object-contain" />
              </a>
              <p className="text-sm leading-relaxed text-gray-400 mb-3">
                Authentic Puebla-style Mexican food, served from our truck on G Street.
              </p>
              <p className="text-sm font-semibold text-gray-300 italic">
                Family-owned. Family-run. Family-fed.
              </p>
            </div>

            {/* COL 2 — Find the Truck */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
                Find the Truck
              </h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://maps.google.com/?q=4200+G+St,+Philadelphia,+PA+19124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    4200 G St<br />Philadelphia, PA 19124
                  </a>
                </li>
                <li className="pt-1">
                  Mon–Sat: 10am – 9pm<br />Sunday: Closed
                </li>
                <li className="pt-1">
                  <a href="tel:+12675966092" className="hover:text-white transition-colors">
                    (267) 596-6092
                  </a>
                </li>
                <li>
                  <a href="mailto:info@restaurantpotrillos.com" className="hover:text-white transition-colors">
                    info@restaurantpotrillos.com
                  </a>
                </li>
              </ul>
            </div>

            {/* COL 3 — Quick Links */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
                Explore
              </h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href={POS_URL} className="hover:text-white transition-colors">
                    Menu (Order Online)
                  </a>
                </li>
                <li>
                  <a href="/our-story" className="hover:text-white transition-colors">Our Story</a>
                </li>
                <li>
                  <a href={RESTAURANT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Visit the Restaurant
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* COL 4 — Follow + Order */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
                Follow Us
              </h4>

              <div className="flex items-center gap-4 mb-6">
                <a href="https://www.instagram.com/potrillosrestaurantphilly/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/lospotrillosrestaurantphilly" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@lospotrillosrestaurant" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                  </svg>
                </a>
              </div>

              <p className="text-xs font-bold tracking-widest text-white uppercase mb-2">Order Online</p>
              <a href={POS_URL} className="inline-block text-sm font-bold text-[#c0392b] hover:text-white transition-colors">
                Order Now →
              </a>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <span>© 2026 Los Potrillos Restaurant Inc. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="/terms-conditions" className="hover:text-gray-400 transition-colors">Terms &amp; Conditions</a>
              <a href="/sitemap" className="hover:text-gray-400 transition-colors">Site Map</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer