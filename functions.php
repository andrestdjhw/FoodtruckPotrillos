<?php

function boilerplate_load_assets() {
  // Version by file modification time so browsers and LiteSpeed pick up new builds
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element', 'react-jsx-runtime'), filemtime(get_theme_file_path('/build/index.js')), true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'), array(), filemtime(get_theme_file_path('/build/index.css')));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

// Load the theme's React bundle (and the WP React scripts it depends on) right away
// instead of waiting for LiteSpeed's "delay JS until user interaction"
function potrillos_litespeed_js_defer_exc($excludes) {
  $excludes[] = 'wp-includes/js/dist/';
  $excludes[] = 'themes/foodtruck_los_potrillos/build/index.js';
  return $excludes;
}

add_filter('litespeed_optm_js_defer_exc', 'potrillos_litespeed_js_defer_exc');
add_filter('litespeed_optm_gm_js_exc', 'potrillos_litespeed_js_defer_exc');
