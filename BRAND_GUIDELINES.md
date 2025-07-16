# Labo Jaune Brand Guidelines

_Inspired by BASIC/DEPT®'s minimalist approach_

## Brand Philosophy

**"Simple to understand, impossible to ignore"**

Labo Jaune creates digital experiences that merge technical excellence with creative clarity. Our work lives at the intersection of innovation and simplicity, positioning brands in the digital landscape through purposeful design and strategic thinking.

## Visual Identity

### Color Palette

#### Primary Colors

- **Jaune (Primary Yellow)**: #FFD700
  - Used for key CTAs, highlights, and brand moments
  - Creates energy and optimism
- **Noir (Pure Black)**: #000000
  - Primary text color
  - Creates strong contrast
- **Blanc (Pure White)**: #FFFFFF
  - Background color
  - Negative space

#### Secondary Colors

- **Gris Foncé (Dark Gray)**: #1A1A1A
  - Secondary text
  - Subtle backgrounds
- **Gris Moyen (Medium Gray)**: #666666
  - Supporting text
  - Borders and dividers
- **Gris Clair (Light Gray)**: #F5F5F5
  - Background variations
  - Subtle UI elements

#### Accent Colors (Sparingly Used)

- **Success Green**: #00C851
- **Error Red**: #FF4444
- **Info Blue**: #33B5E5

### Typography

#### Font Stack

```
Primary: "Neue Haas Grotesk Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif
Secondary: "GT Super", "Georgia", serif (for special headlines)
Monospace: "JetBrains Mono", "Courier New", monospace (for code)
```

#### Type Scale (Desktop)

- **Display**: 72px/80px (900 weight)
- **H1**: 56px/64px (800 weight)
- **H2**: 40px/48px (700 weight)
- **H3**: 32px/40px (600 weight)
- **H4**: 24px/32px (600 weight)
- **Body Large**: 20px/32px (400 weight)
- **Body**: 16px/24px (400 weight)
- **Caption**: 14px/20px (400 weight)
- **Small**: 12px/16px (400 weight)

#### Type Scale (Mobile)

- **Display**: 48px/56px
- **H1**: 40px/48px
- **H2**: 32px/40px
- **H3**: 24px/32px
- **H4**: 20px/28px
- **Body Large**: 18px/28px
- **Body**: 16px/24px
- **Caption**: 14px/20px
- **Small**: 12px/16px

### Layout & Grid

#### Container Widths

- **Max Width**: 1440px
- **Content Max Width**: 1200px
- **Narrow Content**: 800px (for text-heavy sections)

#### Grid System

- **Columns**: 12 column grid
- **Gutter**: 32px (desktop), 16px (mobile)
- **Margins**: 80px (desktop), 24px (mobile)

#### Spacing Scale

- **4px**: xs
- **8px**: sm
- **16px**: md
- **24px**: lg
- **32px**: xl
- **48px**: 2xl
- **64px**: 3xl
- **96px**: 4xl
- **128px**: 5xl

### Components

#### Buttons

- **Primary**: Black background, white text, yellow hover
- **Secondary**: White background, black border, yellow hover
- **Ghost**: No background, black text, yellow underline on hover
- **Height**: 48px (large), 40px (medium), 32px (small)
- **Border Radius**: 0px (sharp corners)
- **Padding**: 24px horizontal

#### Cards

- **Background**: White
- **Border**: 1px solid #F5F5F5
- **Hover**: Slight lift with shadow
- **Padding**: 32px
- **Border Radius**: 0px

#### Navigation

- **Style**: Minimal, horizontal
- **Height**: 80px
- **Background**: White with subtle border
- **Logo**: Left aligned
- **Menu**: Right aligned, simple text links
- **Mobile**: Full-screen overlay with large typography

### Animation Principles

#### Timing

- **Fast**: 200ms (micro-interactions)
- **Normal**: 300ms (standard transitions)
- **Slow**: 600ms (page transitions)
- **Extra Slow**: 1000ms (hero animations)

#### Easing

- **Default**: cubic-bezier(0.4, 0, 0.2, 1)
- **Enter**: cubic-bezier(0, 0, 0.2, 1)
- **Exit**: cubic-bezier(0.4, 0, 1, 1)

#### Animation Types

1. **Fade In**: Opacity 0 to 1
2. **Slide Up**: TranslateY(20px) to TranslateY(0)
3. **Scale**: Scale(0.95) to Scale(1)
4. **Stagger**: Sequential animations with 50ms delay
5. **Parallax**: Subtle vertical movement on scroll
6. **Hover States**: Color transitions, underlines, slight scales

### Copy Tone & Voice

#### Principles

1. **Clear**: No jargon, straight to the point
2. **Confident**: Bold statements without arrogance
3. **Human**: Conversational but professional
4. **Inspiring**: Focus on possibilities and outcomes

#### Writing Guidelines

- **Headlines**: Short, punchy, action-oriented
- **Body Copy**: Concise paragraphs (3-4 sentences max)
- **CTAs**: Verb-driven, specific actions
- **Case Studies**: Results-focused, client-centric

#### Examples

- **Hero**: "We transform ideas into digital experiences"
- **CTA**: "Start your project" (not "Get in touch")
- **Service**: "Strategy that moves you forward" (not "Strategic consulting services")

### Page Sections

#### Hero Sections

- **Full viewport height** (100vh)
- **Large typography** with animated entrance
- **Minimal elements**: Headline, subline, CTA
- **Yellow accent** on key words or CTA

#### Case Study Grid

- **2-column grid** on desktop
- **Large images** with minimal text overlay
- **Hover effect**: Subtle zoom on image, yellow accent appears
- **Information**: Client name, project type, year

#### Service Sections

- **Alternating layouts**: Image left/right
- **Bold numbers** for process steps
- **Generous whitespace**
- **Yellow highlights** for key metrics

#### About Section

- **Full-width statement**
- **Team grid** with hover interactions
- **Values** in large typography

#### Contact Section

- **Split layout**: Form left, info right
- **Minimal form fields**
- **Large submit button** with yellow hover

### Responsive Behavior

#### Breakpoints

- **Mobile**: 0-767px
- **Tablet**: 768px-1023px
- **Desktop**: 1024px-1439px
- **Large Desktop**: 1440px+

#### Mobile Considerations

- **Touch targets**: Minimum 44px
- **Font sizes**: Never below 14px
- **Margins**: Reduced but proportional
- **Navigation**: Full-screen overlay
- **Images**: Full-width on mobile

### Accessibility

#### Requirements

- **Color Contrast**: Minimum 4.5:1 for body text
- **Focus States**: Yellow outline for keyboard navigation
- **Alt Text**: Descriptive for all images
- **ARIA Labels**: For interactive elements
- **Motion**: Respect prefers-reduced-motion

### Do's and Don'ts

#### Do's

- Use plenty of whitespace
- Keep layouts simple and structured
- Use yellow strategically for emphasis
- Write clear, concise copy
- Ensure fast load times

#### Don'ts

- Don't use gradients or shadows excessively
- Don't center-align body text
- Don't use more than 2 fonts
- Don't create busy layouts
- Don't use yellow for large areas

## Implementation Notes

This design system is inspired by BASIC/DEPT®'s philosophy of creating digital experiences that are "easy to understand, impossible to ignore." The yellow primary color adds energy and optimism while maintaining the minimalist aesthetic that makes content shine.
