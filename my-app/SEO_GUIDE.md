# SEO Implementation Guide

This guide explains the SEO improvements implemented for Izzy Visuals.

## Components Created

### 1. **SEO Component** (`src/components/SEO.tsx`)
Handles dynamic meta tags, Open Graph tags, and Twitter cards for each page.

**Usage:**
```tsx
import SEO from '../components/SEO'

function MyPage() {
  return (
    <>
      <SEO 
        title="Page Title | Izzy Visuals"
        description="Page description for search engines"
        url="https://izzyvisuals.com/page"
        image="/images/og-image.jpg"
        keywords="photo, photography, events"
      />
      {/* page content */}
    </>
  )
}
```

**Props:**
- `title` (optional): Page title - auto-adds "| Izzy Visuals" if not included
- `description` (optional): Meta description (150-160 chars recommended)
- `image` (optional): Open Graph image for social sharing
- `url` (optional): Canonical URL
- `type` (optional): OpenGraph type (default: "website")
- `keywords` (optional): Page keywords

### 2. **StructuredData Component** (`src/components/StructuredData.tsx`)
Adds JSON-LD structured data for rich snippets in search results.

**Usage:**
```tsx
import StructuredData from '../components/StructuredData'

const organizationData = {
  name: 'Izzy Visuals',
  description: 'Professional photographer',
  image: '/images/logo.png',
  url: 'https://izzyvisuals.com',
  email: 'izzyvisuals14@gmail.com',
  sameAs: ['https://www.instagram.com/izzyvisuals__']
};

<StructuredData type="LocalBusiness" data={organizationData} />
```

## Files & Configuration

### 1. **robots.txt** (`public/robots.txt`)
- Instructs search engine crawlers on which pages to crawl
- Located in public folder, auto-served at root
- Prevents crawling of /api and /admin routes

### 2. **Sitemap Generator** (`scripts/generate-sitemap.js`)
Automatically generates `sitemap.xml` for search engines.

**How it works:**
- Runs automatically before build: `npm run build`
- Can run manually: `npm run sitemap`
- Generates at: `public/sitemap.xml`

**To add new routes:**
Edit the `routes` array in `scripts/generate-sitemap.js`:
```js
const routes = [
  { path: '/new-page', priority: '0.8', changefreq: 'weekly' },
  // ...
];
```

### 3. **HelmetProvider Wrapper** (`src/main.tsx`)
Manages all meta tags and head elements dynamically. Wrapped around the app to enable SEO components.

### 4. **Updated HTML Head** (`index.html`)
Enhanced with:
- Descriptive meta tags
- Theme color
- Preconnect hints
- Better title with keywords

## Current Setup

### Pages with SEO:
- ✅ Home (`NewHomepage.tsx`)
- ✅ About (`About.tsx`)
- ✅ Contact (`Contact.tsx`)
- ✅ Gallery (`Gallery.tsx`)

### Gallery Child Pages:
To add SEO to gallery child pages, follow this pattern:

```tsx
import SEO from '../components/SEO'

function Sports() {
  return (
    <>
      <SEO 
        title="Sports Photography | Izzy Visuals"
        description="Dynamic sports photography capturing the intensity and energy of athletic moments"
        url="https://izzyvisuals.com/gallery/sports"
      />
      {/* page content */}
    </>
  )
}
```

## SEO Checklist

- ✅ Dynamic meta titles & descriptions
- ✅ Open Graph tags (social sharing)
- ✅ Twitter cards
- ✅ Robots.txt for crawler instructions
- ✅ Sitemap.xml generation
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Image alt text handling

## Best Practices

1. **Titles**: Keep 50-60 characters, include target keyword
2. **Descriptions**: 150-160 characters, compelling call-to-action
3. **Images**: Use Open Graph images (1200x630px recommended)
4. **Keywords**: 3-5 primary keywords per page
5. **URLs**: Include canonical URL to prevent duplicates
6. **Images**: Always add alt text to images for accessibility and SEO

## Deployment Notes

When deploying to Vercel:
1. Ensure `public/robots.txt` is included in build
2. Ensure `public/sitemap.xml` is generated before build
3. Update domain in `robots.txt` and sitemap generator if needed
4. Submit sitemap to Google Search Console

## Monitoring

After deployment:
1. Submit sitemap to [Google Search Console](https://search.google.com/search-console)
2. Monitor search performance
3. Check coverage of indexed pages
4. Review any crawl errors

## Future Improvements

- Add schema.org for Portfolio/CreativeWork
- Implement breadcrumb navigation
- Add image optimization/lazy loading
- Create blog section (if content marketing planned)
- Implement AMP pages (optional)
