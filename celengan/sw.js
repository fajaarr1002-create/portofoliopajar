const CACHE_VERSION  = 'v4';
const STATIC_CACHE   = `celengan-static-${CACHE_VERSION}`;
const ASSET_CACHE    = `celengan-assets-${CACHE_VERSION}`; 
const FONT_CACHE     = `celengan-fonts-${CACHE_VERSION}`;
const DYNAMIC_CACHE  = `celengan-dynamic-${CACHE_VERSION}`;

const ALL_CACHES = [STATIC_CACHE, ASSET_CACHE, FONT_CACHE, DYNAMIC_CACHE];

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable.png',
  '/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
