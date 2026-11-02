<?php
/**
 * Template Name: Site Map
 */

get_header(); ?>

<!-- HERO -->
<section class="bg-[#0f0f0f] pt-32 pb-12">
  <div class="max-w-4xl mx-auto px-4">
    <p class="text-xs font-bold tracking-widest text-[#e8a020] uppercase mb-3">Navigation</p>
    <h1 class="text-3xl sm:text-4xl font-black text-white mb-3">Site Map</h1>
    <p class="text-sm text-gray-500">Everything on our website, in one place.</p>
  </div>
</section>

<!-- CONTENT -->
<section class="bg-white py-16">
  <div class="max-w-4xl mx-auto px-4">
    <div class="grid gap-10 sm:grid-cols-3 text-sm text-gray-600">

      <div>
        <h2 class="text-lg font-black text-gray-900 mb-3">Pages</h2>
        <ul class="space-y-2">
          <li><a href="/" class="text-[#c0392b] hover:underline">Home</a></li>
          <li><a href="/our-story" class="text-[#c0392b] hover:underline">Our Story</a></li>
          <li><a href="/contact" class="text-[#c0392b] hover:underline">Contact</a></li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg font-black text-gray-900 mb-3">Order &amp; Visit</h2>
        <ul class="space-y-2">
          <li><a href="https://los-potrillos-food-truck.cloveronline.com/" class="text-[#c0392b] hover:underline">Menu (Order Online)</a></li>
          <li><a href="https://restaurant.restaurantpotrillos.com/" target="_blank" rel="noopener noreferrer" class="text-[#c0392b] hover:underline">Visit the Restaurant</a></li>
          <li><a href="https://maps.google.com/?q=4200+G+St,+Philadelphia,+PA+19124" target="_blank" rel="noopener noreferrer" class="text-[#c0392b] hover:underline">Find Us on Google Maps</a></li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg font-black text-gray-900 mb-3">Legal</h2>
        <ul class="space-y-2">
          <li><a href="/privacy-policy" class="text-[#c0392b] hover:underline">Privacy Policy</a></li>
          <li><a href="/terms-conditions" class="text-[#c0392b] hover:underline">Terms &amp; Conditions</a></li>
          <li><a href="/sitemap" class="text-[#c0392b] hover:underline">Site Map</a></li>
        </ul>
      </div>

    </div>
  </div>
</section>

<?php get_footer(); ?>
