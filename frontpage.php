<?php get_header(); ?>

<!-- ══════════════════════════════════════════════
     4.2 — HERO
════════════════════════════════════════════════ -->
<section class="relative min-h-[90vh] flex items-center bg-[#0f0f0f] overflow-hidden">

  <div style="position:absolute; top:0; right:0; height:90vh; width:50%; z-index:0; overflow:hidden;">
    <video
      src="/wp-content/uploads/2026/05/FoodtruckHero.mp4"
      autoplay muted loop playsinline
      style="width:100%; height:100%; object-fit:cover; display:block;"
    ></video>
    <div style="position:absolute; inset:0; background:rgba(0,0,0,0.5);"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent hidden lg:block"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent lg:hidden"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 lg:py-0 w-full">
    <div class="max-w-lg">

      <p class="text-xs font-bold tracking-widest text-[#e8a020] uppercase mb-3">
        Authentic Mexican Street Food · 4200 G St, Philadelphia
      </p>

      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
        Real Mexican Street Food.<br />
        <span class="text-[#e8a020]">Real Puebla Recipe.</span><br />
        Fresh from Our Truck.
      </h1>

      <p class="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
        Same family recipe as our Port Richmond restaurant — now on the streets.
        Order at the truck in minutes, or reserve us for your next private event.
      </p>

      <div class="flex items-center gap-2 mb-6">
        <span class="text-[#e8a020] text-sm">★★★★★</span>
        <span class="text-xs text-gray-400">Loved by Philly — From the Same Family Behind Los Potrillos Restaurant</span>
      </div>

      <div class="flex flex-col sm:flex-row gap-3">
        <a
          href="https://los-potrillos-food-truck.cloveronline.com/"
          class="bg-[#c0392b] hover:bg-[#a93226] text-white font-black text-sm px-8 py-3.5 rounded-full transition-colors shadow-lg text-center"
        >
          ORDER NOW →
        </a>
        <a
          href="#reserve"
          class="js-scroll-reserve border-2 border-white text-white hover:bg-white hover:text-[#0f0f0f] font-black text-sm px-8 py-3.5 rounded-full transition-colors text-center"
        >
          RESERVE THE TRUCK
        </a>
      </div>

    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     4.5 — TRUST BLOCK
════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4">

    <!-- <h2 class="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-12">
      Real Food. Real Fast. Real Recipes.
    </h2> -->

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <div class="flex flex-col items-center text-center gap-3">
        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-[#c0392b]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
          </svg>
        </div>
        <h3 class="text-sm font-black tracking-widest text-gray-900 uppercase">Puebla Recipe</h3>
        <p class="text-sm text-gray-500 leading-relaxed">The same family recipe served at our restaurant — passed down through generations.</p>
      </div>

      <div class="flex flex-col items-center text-center gap-3">
        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-[#c0392b]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
          </svg>
        </div>
        <h3 class="text-sm font-black tracking-widest text-gray-900 uppercase">Fresh Daily</h3>
        <p class="text-sm text-gray-500 leading-relaxed">Ingredients prepped every morning. Nothing pre-packaged. Nothing reheated.</p>
      </div>

      <div class="flex flex-col items-center text-center gap-3">
        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-[#c0392b]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
          </svg>
        </div>
        <h3 class="text-sm font-black tracking-widest text-gray-900 uppercase">Fast Service</h3>
        <p class="text-sm text-gray-500 leading-relaxed">Order at the POS, pick up at the window. Real food, ready in minutes.</p>
      </div>

      <div class="flex flex-col items-center text-center gap-3">
        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-[#c0392b]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
          </svg>
        </div>
        <h3 class="text-sm font-black tracking-widest text-gray-900 uppercase">Family-Owned</h3>
        <p class="text-sm text-gray-500 leading-relaxed">Two brothers. One recipe. The same family that runs the restaurant.</p>
      </div>

    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     4.3 — THE TWO PILLARS
════════════════════════════════════════════════ -->
<section class="flex flex-col lg:flex-row">

  <div class="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] overflow-hidden group cursor-pointer">
    <img
      src="/wp-content/uploads/2026/05/OrderPickupHero-e1778174639866.jpg"
      alt="Birria tacos from Los Potrillos Food Truck"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    <div class="absolute inset-0 flex flex-col justify-center px-8 lg:px-12">
      <h2 class="text-4xl lg:text-5xl font-black text-white mb-3">ORDER NOW</h2>
      <p class="text-sm text-gray-200 mb-6 leading-relaxed max-w-xs">
        Real birria tacos. Fresh from the truck.<br />
        Order online and pick up in minutes.
      </p>
      <a
        href="https://los-potrillos-food-truck.cloveronline.com/"
        class="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white font-black text-sm px-7 py-3 rounded-full transition-colors w-fit shadow-lg"
      >
        ORDER NOW
      </a>
    </div>
  </div>

  <div class="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] overflow-hidden group cursor-pointer">
    <img
      src="/wp-content/uploads/2026/05/FoodTruck-scaled-1.jpg"
      alt="Los Potrillos Food Truck at an event"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    <div class="absolute inset-0 flex flex-col justify-center px-8 lg:px-12">
      <h2 class="text-4xl lg:text-5xl font-black text-white mb-3">RESERVE<br />THE TRUCK</h2>
      <p class="text-sm text-gray-200 mb-6 leading-relaxed max-w-xs">
        Bring real Mexican street food to your event.<br />
        Quinceañeras, weddings, festivals, and more.
      </p>
      <a
        href="/contact"
        class="js-scroll-reserve inline-block bg-white hover:bg-gray-100 text-[#111111] font-black text-sm px-7 py-3 rounded-full transition-colors w-fit shadow-lg"
      >
        REQUEST AVAILABILITY
      </a>
    </div>
  </div>

</section>


<!-- ══════════════════════════════════════════════
     4.4 — THE BIRRIA
════════════════════════════════════════════════ -->
<section class="bg-[#0f0f0f] py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">

      <div class="w-full lg:w-1/2 shrink-0">
        <div class="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
          <img
            src="/wp-content/uploads/2026/05/TacosBirria-scaled.png"
            alt="Birria tacos with consomé"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <p class="text-xs font-bold tracking-widest text-[#e8a020] uppercase mb-3">
          Our Signature — The Dish People Come Looking For
        </p>
        <h2 class="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
          The Best Birria Tacos in Philadelphia —<br />Now From the Truck
        </h2>
        <div class="text-gray-400 text-sm leading-relaxed space-y-4 mb-8">
          <p>
            We start before sunrise. The meat braises slowly for 12 hours in a sauce built
            from chiles, spices, and a recipe brought from Puebla generations ago. The tortillas
            are dipped in the consomé and crisped on the plancha. The cheese melts inside.
            The cilantro goes on last.
          </p>
          <p>
            It is the same birria we serve at our restaurant in Port Richmond — same recipe,
            same care, same flavor. Only now it is faster, simpler, and waiting for you at 4200 G St.
          </p>
        </div>
        <blockquote class="border-l-4 border-[#c0392b] pl-4 mb-8">
          <p class="text-gray-300 text-sm italic">"Best birria tacos I've had outside of Mexico."</p>
          <cite class="text-xs text-gray-500 not-italic">— Verified Google Review</cite>
        </blockquote>
        <a
          href="https://los-potrillos-food-truck.cloveronline.com/"
          class="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white font-black text-sm px-8 py-4 rounded-full transition-colors shadow-lg"
        >
          ORDER BIRRIA TACOS NOW →
        </a>
      </div>

    </div>
  </div>
</section>


<!-- ══════════════════════════════════════════════
     4.6 — FAMILY STORY
════════════════════════════════════════════════ -->
<!-- <section class="bg-stone-50 py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

      <div class="w-full lg:w-1/2 shrink-0">
        <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <img
            src="/wp-content/uploads/2026/05/PotrillosFamilyAtRestaurant.jpg"
            alt="The Los Potrillos family at the restaurant"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <p class="text-xs font-bold tracking-widest text-[#c0392b] uppercase mb-3">
          The Family Behind the Truck
        </p>
        <h2 class="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
          From Our Kitchen in Port Richmond to Our Truck on G Street
        </h2>
        <div class="text-gray-600 text-sm leading-relaxed space-y-4 mb-8">
          <p>
            Los Potrillos was started by two brothers who grew up cooking in their family's kitchen
            in Puebla, Mexico. The recipes — including the birria that put us on the map —
            came from their mother and her mother before her.
          </p>
          <p>
            What started in our restaurant at 2617 E Venango Street has grown into something more.
            The food truck at 4200 G St brings the same recipes, the same ingredients, and the
            same care to the streets of Philadelphia — faster, simpler, and just as real.
          </p>
          <p>
            We are not a chain. We are not a concept. We are a family-run kitchen —
            now with two ways to feed you.
          </p>
        </div>
        <a
          href="https://restaurantpotrillos.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-semibold text-[#c0392b] hover:underline"
        >
          Visit our restaurant in Port Richmond →
        </a>
      </div>

    </div>
  </div>
</section> -->

<!-- ══════════════════════════════════════════════
     4.8 — REVIEWS
════════════════════════════════════════════════ -->
<section class="st-reviews" style="--st-review-pattern:url('<?php echo esc_url($img['pattern_reviews']); ?>'); --st-review-stamp:url('<?php echo esc_url($img['stamp_round']); ?>')">
  <?php echo do_shortcode('[trustindex no-registration=google]'); ?>
</section>

<!-- ══════════════════════════════════════════════
     4.7 — RESERVE THE TRUCK
════════════════════════════════════════════════ -->
<section id="reserve" class="bg-[#0f0f0f] py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

      <div class="w-full lg:w-5/12">
        <p class="text-xs font-bold tracking-widest text-[#e8a020] uppercase mb-3">
          Reserve the Truck — For Events That Matter
        </p>
        <h2 class="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
          Bring the Los Potrillos Truck to Your Quinceañera, Wedding, or Festival
        </h2>
        <p class="text-sm text-gray-400 leading-relaxed mb-8">
          Real Mexican street food, served from our truck, at your event. Custom menus.
          Generous portions. Memorable for your guests. Available across Philadelphia
          and the surrounding counties.
        </p>
        <div class="flex flex-col gap-3">
          <div class="border border-gray-700 rounded-xl px-5 py-4">
            <h3 class="text-xs font-black tracking-widest text-white uppercase mb-1">Family Celebrations</h3>
            <p class="text-xs text-gray-500">Quinceañeras · Weddings · Birthdays · Graduations</p>
          </div>
          <div class="border border-gray-700 rounded-xl px-5 py-4">
            <h3 class="text-xs font-black tracking-widest text-white uppercase mb-1">Private &amp; Corporate Events</h3>
            <p class="text-xs text-gray-500">Office Parties · Team Events · Holiday Gatherings</p>
          </div>
          <div class="border border-gray-700 rounded-xl px-5 py-4">
            <h3 class="text-xs font-black tracking-widest text-white uppercase mb-1">Festivals &amp; Community</h3>
            <p class="text-xs text-gray-500">Block Parties · Festivals · School Events · Church Gatherings</p>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-7/12">
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <h3 class="text-xl font-black text-gray-900 mb-6">Check Truck Availability for Your Event</h3>
          <div id="reservation-form-root"></div>
          <p class="text-xs text-gray-400 text-center mt-4">We respond within 24 hours. No spam. No obligation.</p>
          <div class="text-center mt-3">
            <a
              href="https://wa.me/12675966092"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs font-semibold text-[#c0392b] hover:underline"
            >
              Prefer WhatsApp? → Message us at (267) 596-6092
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     4.9 — FIND THE TRUCK
════════════════════════════════════════════════ -->
<section class="bg-stone-50 py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4">

    <h2 class="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">
      Find Us at 4200 G Street
    </h2>

    <div class="flex flex-col lg:flex-row gap-8 items-start">

      <div class="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.3!2d-75.0987!3d39.9987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4200+G+St%2C+Philadelphia%2C+PA+19124!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="420"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Los Potrillos Food Truck Location"
        ></iframe>
      </div>

      <div class="w-full lg:w-1/2">
        <p class="text-xs font-bold tracking-widest text-[#c0392b] uppercase mb-4">Visit the Truck</p>
        <div itemscope itemtype="https://schema.org/FoodEstablishment">
          <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress" class="mb-4">
            <p class="text-2xl font-black text-gray-900 mb-1">
              <span itemprop="streetAddress">4200 G St</span>
            </p>
            <p class="text-gray-600 text-sm">
              <span itemprop="addressLocality">Philadelphia</span>,
              <span itemprop="addressRegion">PA</span>
              <span itemprop="postalCode">19124</span>
            </p>
          </div>
          <div class="border-t border-stone-200 py-4 mb-4">
            <p class="text-xs font-bold tracking-widest text-gray-900 uppercase mb-2">Hours</p>
            <p itemprop="openingHours" content="Mo,Tu,We,Th,Fr,Sa 10:00-21:00" class="text-sm text-gray-600">
              Monday – Saturday: 10am – 9pm<br />Sunday: Closed
            </p>
          </div>
          <div class="border-t border-stone-200 py-4 mb-6">
            <a href="tel:+12675966092" itemprop="telephone" class="text-sm font-semibold text-gray-900 hover:text-[#c0392b] transition-colors">
              (267) 596-6092
            </a><br />
            <a href="mailto:info@restaurantpotrillos.com" itemprop="email" class="text-sm text-gray-500 hover:text-[#c0392b] transition-colors">
              info@restaurantpotrillos.com
            </a>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-3 mb-6">
          <a
            href="https://maps.google.com/?q=4200+G+St,+Philadelphia,+PA+19124"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#c0392b] hover:bg-[#a93226] text-white font-black text-sm px-6 py-3 rounded-full transition-colors text-center shadow-sm"
          >
            GET DIRECTIONS →
          </a>
          <a
            href="tel:+12675966092"
            class="border-2 border-gray-300 hover:border-[#c0392b] text-gray-700 hover:text-[#c0392b] font-black text-sm px-6 py-3 rounded-full transition-colors text-center"
          >
            CALL US →
          </a>
        </div>
        <p class="text-xs text-gray-500 leading-relaxed">
          Easy street parking. Walk-up window service. Cash and card accepted.
          No reservations needed for daily orders — just stop by or order ahead online.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ══════════════════════════════════════════════
     4.10 — FAQs
════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
  <div class="max-w-3xl mx-auto px-4">

    <h2 class="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">
      Frequently Asked Questions
    </h2>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type":"Question","name":"How do I order from the truck?","acceptedAnswer":{"@type":"Answer","text":"Easy. Click Order Now anywhere on this page to order through our online system, then pick up at the truck window. You can also walk up and order in person — but ordering ahead online means your food is ready faster. We accept cash and card."}},
        {"@type":"Question","name":"What makes your birria tacos different?","acceptedAnswer":{"@type":"Answer","text":"Our birria is slow-cooked for 12 hours using a family recipe from Puebla, Mexico — the same recipe served at our Port Richmond restaurant. The tortillas are dipped in the consomé and crisped on the plancha. Nothing is pre-packaged. Nothing is rushed."}},
        {"@type":"Question","name":"Can I reserve the truck for my private event?","acceptedAnswer":{"@type":"Answer","text":"Yes. We bring the truck to quinceañeras, weddings, birthdays, corporate events, festivals, and community gatherings across Philadelphia. Submit a reservation request and we will respond within 24 hours with availability and pricing."}},
        {"@type":"Question","name":"Are you the same Los Potrillos as the restaurant in Port Richmond?","acceptedAnswer":{"@type":"Answer","text":"Yes — same family, same recipes, same brothers from Puebla. Our restaurant is at 2617 E Venango St, and our truck is at 4200 G St. Two locations, one kitchen tradition."}},
        {"@type":"Question","name":"Do you have vegetarian options?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our menu includes vegetarian-friendly tacos, quesadillas, and sides. View the full menu and order online to see all options."}},
        {"@type":"Question","name":"What are your hours?","acceptedAnswer":{"@type":"Answer","text":"Monday through Saturday, 10am to 9pm. Closed Sundays. Located at 4200 G Street, Philadelphia, PA 19124."}}
      ]
    }
    </script>

    <?php
    $faqs = [
      ["q" => "How do I order from the truck?",                               "a" => "Easy. Click \"Order Now\" anywhere on this page to order through our online system, then pick up at the truck window. You can also walk up and order in person — but ordering ahead online means your food is ready faster. We accept cash and card."],
      ["q" => "What makes your birria tacos different?",                       "a" => "Our birria is slow-cooked for 12 hours using a family recipe from Puebla, Mexico — the same recipe served at our Port Richmond restaurant. The tortillas are dipped in the consomé and crisped on the plancha. Nothing is pre-packaged. Nothing is rushed."],
      ["q" => "Can I reserve the truck for my private event?",                 "a" => "Yes. We bring the truck to quinceañeras, weddings, birthdays, corporate events, festivals, and community gatherings across Philadelphia. Submit a reservation request and we'll respond within 24 hours with availability and pricing."],
      ["q" => "Are you the same Los Potrillos as the restaurant in Port Richmond?", "a" => "Yes — same family, same recipes, same brothers from Puebla. Our restaurant is at 2617 E Venango St, and our truck is at 4200 G St. Two locations, one kitchen tradition."],
      ["q" => "Do you have vegetarian options?",                               "a" => "Yes. Our menu includes vegetarian-friendly tacos, quesadillas, and sides. View the full menu and order online to see all options."],
      ["q" => "What are your hours?",                                          "a" => "Monday through Saturday, 10am to 9pm. Closed Sundays. Located at 4200 G Street, Philadelphia, PA 19124."],
    ];
    ?>

    <div class="divide-y divide-stone-200">
      <?php foreach ($faqs as $faq) : ?>
        <div class="faq-item">
          <button class="faq-trigger w-full flex items-center justify-between py-5 text-left gap-4 group" aria-expanded="false">
            <span class="text-sm font-bold text-gray-900 group-hover:text-[#c0392b] transition-colors">
              <?php echo esc_html($faq['q']); ?>
            </span>
            <svg class="faq-icon w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
            <p class="text-sm text-gray-500 leading-relaxed pb-5"><?php echo esc_html($faq['a']); ?></p>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>


<!-- ══════════════════════════════════════════════
     SCRIPTS
════════════════════════════════════════════════ -->
<script>
  // Scroll to #reserve
  document.querySelectorAll('.js-scroll-reserve').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault()
      var target = document.querySelector('#reserve')
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    })
  })

  // FAQ Accordion
  document.querySelectorAll('.faq-trigger').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item   = btn.parentElement
      var answer = item.querySelector('.faq-answer')
      var icon   = item.querySelector('.faq-icon')
      var isOpen = btn.getAttribute('aria-expanded') === 'true'

      document.querySelectorAll('.faq-item').forEach(function(el) {
        el.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false')
        el.querySelector('.faq-answer').style.maxHeight = '0'
        el.querySelector('.faq-icon').style.transform = 'rotate(0deg)'
      })

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true')
        answer.style.maxHeight = answer.scrollHeight + 'px'
        icon.style.transform = 'rotate(180deg)'
      }
    })
  })
</script>

<?php get_footer(); ?>