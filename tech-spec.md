# Bugfree - Tech Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI framework |
| react-dom | ^18.2.0 | DOM renderer |
| vite | ^5.0.0 | Build tool |
| @vitejs/plugin-react | ^4.0.0 | Vite React plugin |
| tailwindcss | ^3.4.0 | Utility CSS |
| autoprefixer | ^10.4.0 | CSS prefixing |
| postcss | ^8.4.0 | CSS processing |
| typescript | ^5.3.0 | Type safety |
| @types/react | ^18.2.0 | React types |
| @types/react-dom | ^18.2.0 | ReactDOM types |
| gsap | ^3.12.0 | Animations & ScrollTrigger |
| @gsap/react | ^2.1.0 | useGSAP hook |
| lucide-react | ^0.400.0 | Icons |
| lenis | ^1.1.0 | Smooth scroll |

## Component Inventory

### Layout

| Component | Source | Reuse |
|-----------|--------|-------|
| Navbar | Custom | Single |
| Footer | Custom | Single |
| FireflyCanvas | Custom | Single |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Video bg, staggered entrance |
| TrustedBar | Custom | Logo strip |
| AboutSection | Custom | Two-col asymmetric |
| ServicesSection | Custom | 3-card grid |
| WhyChooseSection | Custom | Two-col with image collage |
| CoreFeaturesSection | Custom | 3 glassmorphism cards |
| PestTypesSection | Custom | 4 prohibition circles |
| StatsSection | Custom | Counter animation |
| ProcessSection | Custom | 2-col with step cards |
| PricingSection | Custom | 3 pricing cards |
| TestimonialsSection | Custom | Carousel, two-col |
| BlogSection | Custom | 3 blog cards |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| SectionBadge | Custom | ~10 sections |
| SectionHeading | Custom | ~10 sections |
| AnimatedSection | Custom | All sections |
| CheckItem | Custom | About, Process |
| StarRating | Custom | Services, Testimonials |

## Animation Implementation Table

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Firefly particle system | Vanilla Canvas API | Custom rAF loop, 500 particles, radial gradients, mouse clip mask | **High** |
| Hero entrance sequence | GSAP | gsap.timeline() with staggered children, labels for timing | Medium |
| Navbar scroll transition | CSS + JS | Scroll listener toggles class, CSS handles transition | Low |
| Section entrance (fadeIn+slideUp) | GSAP + ScrollTrigger | ScrollTrigger.batch() on all sections, stagger children | Medium |
| Service icon pulse | CSS @keyframes | Pure CSS pulse animation with staggered delay | Low |
| Number counter | GSAP | gsap.to() with snap modifier, ScrollTrigger trigger | Medium |
| Prohibition line draw | CSS + IntersectionObserver | stroke-dashoffset transition on viewport entry | Low |
| Card hover effects | CSS | translateY + shadow on hover, transition 0.3s | Low |
| Button hover | CSS | scale + brightness filter | Low |
| Testimonial carousel | React state | Simple dot-based slide toggle with fade transition | Low |
| Logo sequential fade | GSAP + ScrollTrigger | stagger fadeIn on scroll | Low |

## State & Logic Plan

### Firefly Canvas
- **Mount**: Initialize canvas, create 500 particles, start rAF loop
- **Mouse tracking**: Global mousemove listener updates mask center
- **Resize**: Debounced recalc of canvas dimensions
- **Cleanup**: Cancel rAF, remove listeners
- **Mobile**: Auto-orbital mask center when no touch

### Navbar
- Scroll position state (>50px = scrolled)
- Mobile menu toggle state

### Testimonials
- Active slide index state
- Dot navigation handler

## Other Key Decisions

- **No shadcn/ui**: The design is fully custom with no standard UI patterns (forms, dialogs, tables). All components are bespoke.
- **Canvas API over WebGL**: The particle system uses 2D canvas with radial gradients - sufficient for 500 particles at 60fps without WebGL complexity.
- **GSAP over Framer Motion**: ScrollTrigger integration is cleaner for scroll-based batch animations.
- **Single-page**: All sections on one page, no routing needed.
