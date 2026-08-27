---
name: Studio Precision
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f3"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1a1c1c"
  on-surface-variant: "#464555"
  inverse-surface: "#2f3131"
  inverse-on-surface: "#f0f1f1"
  outline: "#777587"
  outline-variant: "#c7c4d8"
  surface-tint: "#4c42e9"
  primary: "#493ee5"
  on-primary: "#ffffff"
  primary-container: "#635bff"
  on-primary-container: "#fefaff"
  inverse-primary: "#c3c0ff"
  secondary: "#5f5e5e"
  on-secondary: "#ffffff"
  secondary-container: "#e5e2e1"
  on-secondary-container: "#656464"
  tertiary: "#5b5b5b"
  on-tertiary: "#ffffff"
  tertiary-container: "#747474"
  on-tertiary-container: "#fdfbfb"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e2dfff"
  primary-fixed-dim: "#c3c0ff"
  on-primary-fixed: "#0f0069"
  on-primary-fixed-variant: "#321ed2"
  secondary-fixed: "#e5e2e1"
  secondary-fixed-dim: "#c8c6c5"
  on-secondary-fixed: "#1c1b1b"
  on-secondary-fixed-variant: "#474646"
  tertiary-fixed: "#e4e2e2"
  tertiary-fixed-dim: "#c7c6c6"
  on-tertiary-fixed: "#1b1c1c"
  on-tertiary-fixed-variant: "#464747"
  background: "#f9f9f9"
  on-background: "#1a1c1c"
  surface-variant: "#e2e2e2"
  surface-border: "#E5E5E5"
  inverse-text: "#FFFFFF"
  dark-section-bg: "#111111"
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 96px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-desktop: 3rem
  margin-mobile: 1.25rem
  section-gap: 8rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The design system embodies a **Modern Editorial Minimalism** style, positioning the entity as a high-tier digital studio rather than a casual service provider. The aesthetic is characterized by architectural precision, structured whitespace, and a high-contrast palette that prioritizes clarity and technical sophistication.

The personality is **Confident, Strategic, and Intellectual**. It avoids decorative flourishes in favor of "functional elegance"—where the beauty of the UI is derived from perfect alignment, masterful typography, and purposeful motion. This system is designed to evoke a sense of trust and elite craftsmanship for a tech-savvy, professional audience.

## Colors

The palette is strictly curated to maintain a premium, high-contrast look.

- **Primary Accent (`#635BFF`):** Used sparingly for high-impact calls to action, interactive states, and critical brand highlights. It represents the "digital spark" within a structured environment.
- **Surface Strategy:** The default background is a pristine off-white (`#FAFAFA`), providing a softer canvas than pure white to reduce eye strain and feel more "editorial."
- **Inversion:** Dark sections use a deep charcoal (`#111111`) with white text to create dramatic rhythm and visual breaks between content blocks.
- **Neutrality:** Grays are used to establish a clear hierarchy, with secondary text (`#666666`) providing enough contrast for readability while allowing headlines to dominate.

## Typography

Typography is the primary visual driver. We use **Plus Jakarta Sans** for headlines to provide a modern, slightly geometric warmth, and **Inter** for body text to ensure maximum utility and readability.

- **Scale:** Large display sizes are intended for short, punchy hero statements.
- **Letter Spacing:** Headlines utilize tighter tracking (negative letter-spacing) to feel more cohesive and "locked-in," while labels use increased tracking for better legibility at small sizes.
- **Vertical Rhythm:** A generous line-height for body text is maintained to support the "lapang" (spacious) feel requested.

## Layout & Spacing

This design system follows a **Fixed Grid** approach for desktop, constraining content to a 1280px maximum width to maintain readability on wide monitors.

- **Section Spacing:** A massive `8rem` (128px) gap is used between major page sections to create an "editorial" flow that allows the eye to rest.
- **Grid:** Use a 12-column grid for desktop. Elements should frequently utilize asymmetrical layouts (e.g., a 5-column description next to a 7-column image) to avoid a generic "boxed" feel.
- **Mobile:** Transition to a single-column layout with 20px side margins. Padding inside cards should remain consistent with the `stack-lg` token to avoid a cramped appearance.

## Elevation & Depth

In line with a modern digital studio aesthetic, depth is created through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows.

- **Flat Surfaces:** Components like cards and inputs primarily use a 1px border (`#E5E5E5`) to define their boundaries.
- **Subtle Elevation:** If a shadow is required for interactivity (e.g., a hovered card), use an "Ambient Shadow": a very soft, high-blur (24px+), low-opacity (4-6%) shadow that feels like a natural lift rather than a drop-shadow.
- **Depth through Contrast:** Use the dark section background (`#111111`) to create "visual depth" by placing it behind standard surface elements.

## Shapes

The shape language is **Soft and Architectural**. We use a subtle corner radius to take the "edge" off the minimalism without making it feel bubbly or consumer-grade.

- **Base Radius:** 4px (0.25rem) is the standard for small components like checkboxes and small buttons.
- **Large Radius:** 8px (0.5rem) is used for cards and large sections.
- **Interactive Elements:** Buttons can occasionally use a "Pill" (full) radius to distinguish them as primary touchpoints, provided the rest of the UI remains geometric.

## Components

- **Buttons:** Primary buttons use the accent color (`#635BFF`) with white text. Secondary buttons are outlined (`#E5E5E5`) or Ghost (no border) to maintain hierarchy. Use 16px vertical and 32px horizontal padding.
- **Inputs:** Use a 1px border (`#E5E5E5`) with 12px padding. Focus states should shift the border color to the primary accent or add a subtle 2px ring.
- **Cards:** White background with a 1px border. Do not use shadows by default. Use `stack-lg` for internal padding to maintain the studio's "spacious" feel.
- **Chips/Badges:** Use the `label-sm` typography style. Backgrounds should be very light gray or a low-opacity version of the accent color.
- **Lists:** Service lists should be styled with generous vertical padding (24px+) and bottom borders only, creating an elegant, scanned-list feel common in high-end portfolios.
- **Portfolio Previews:** Use browser-style frames or "clean-cut" edges for images. Avoid generic shadows; let the photography/mockup provide the visual interest.
