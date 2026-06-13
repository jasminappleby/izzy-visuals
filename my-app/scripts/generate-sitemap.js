#!/usr/bin/env node

/**
 * Sitemap Generator for Izzy Visuals
 * Generates sitemap.xml with all routes and images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOMAIN = 'https://izzyvisuals.com';
const PUBLIC_URL = `${DOMAIN}`;

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery/events', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/events/birthdays', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/events/nightlife', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/events/private', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/sports', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/sports/rugby', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/sports/football', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/sports/americanfootball', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/lifestyle', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/lifestyle/graduation', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery/lifestyle/portraits', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/sitemap', priority: '0.7', changefreq: 'monthly' },
];

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  // Add all routes
  routes.forEach(route => {
    const lastmod = new Date().toISOString().split('T')[0];
    xml += `  <url>\n`;
    xml += `    <loc>${PUBLIC_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += '</urlset>';

  return xml;
}

function saveSitemap() {
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapContent = generateSitemap();
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`✓ Sitemap generated at: ${sitemapPath}`);
}

saveSitemap();
