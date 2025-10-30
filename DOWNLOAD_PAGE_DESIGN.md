# 🎨 Nummi Download Page - Design System

This document captures the clean, minimal design aesthetic used in the `/download` page.

## Design Philosophy

**Clean. Minimal. Professional.**

- Cream/white backgrounds instead of dark themes
- No unnecessary backgrounds or circles
- Solid, readable text colors
- Simple, elegant icons
- Clear hierarchy and spacing
- Mobile-first, responsive design

---

## Color Palette

### Background
- **Main Background**: `bg-gradient-warm` - Cream gradient from light to slightly darker cream
- **Card Background**: `bg-card` - Clean white/light cream cards
- **Border**: `border-border` - Subtle borders for depth

### Text Colors
- **Headings**: `text-foreground` - Dark, high contrast for readability
- **Body Text**: `text-muted-foreground` - Softer, but still readable
- **Primary Accent**: `text-primary` - Orange-red from your brand palette

### Buttons
- **Primary CTA**: `bg-gradient-cosmic` - Your signature orange-to-yellow gradient
  - Text: `text-white`
  - Shadow: `shadow-glow` for depth

- **Secondary CTA**: `bg-foreground text-background`
  - Solid dark button with light text
  - Clean, modern look

---

## Typography

### Headings
```tsx
// Main heading
className="text-4xl md:text-6xl font-bold text-foreground"

// Subheading
className="text-2xl font-bold text-foreground"

// Section heading
className="text-xl font-semibold text-foreground"
```

### Body Text
```tsx
// Large body text
className="text-lg md:text-xl text-muted-foreground"

// Regular body text
className="text-muted-foreground"

// Small text
className="text-muted-foreground text-sm"
```

---

## Icon Design

### Key Principle: **NO BACKGROUND CIRCLES**

❌ **Bad**: Icon inside colored circle with backdrop blur
```tsx
<div className="p-4 bg-card/80 backdrop-blur-sm rounded-full">
  <svg className="w-16 h-16 text-secondary">...</svg>
</div>
```

✅ **Good**: Clean icon with no background
```tsx
<svg className="w-20 h-20 text-foreground" viewBox="0 0 24 24" fill="currentColor">
  ...
</svg>
```

### Icon Sizes
- **Hero/Main Icons**: `w-20 h-20` (80px)
- **Card Icons**: `w-16 h-16` (64px)
- **Button Icons**: `w-5 h-5` or `w-6 h-6`

### Icon Colors
- **Apple Logo**: `text-foreground` (dark, matches text)
- **Android/Play Store**: `text-primary` (brand orange-red)
- **Checkmarks/Success**: Inside gradient circle `bg-gradient-cosmic`

---

## Button Styles

### Primary Gradient Button (Main CTA)
```tsx
<Button
  size="lg"
  className="bg-gradient-cosmic text-white shadow-glow hover:opacity-90 transition-all duration-300"
>
  Download Now
</Button>
```

### Solid Dark Button (Secondary CTA)
```tsx
<Button
  size="lg"
  className="bg-foreground text-background hover:opacity-90 transition-all duration-300 px-8"
>
  Download on Play Store
</Button>
```

### Form Submit Button
```tsx
<Button
  type="submit"
  size="lg"
  className="w-full bg-gradient-cosmic text-white shadow-glow hover:opacity-90 transition-all duration-300"
>
  Notify Me
</Button>
```

---

## Card Design

### Standard Card
```tsx
<div className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-300">
  {/* Card content */}
</div>
```

### Key Features:
- **Background**: Clean white/cream (`bg-card`)
- **Padding**: Generous spacing (`p-8`)
- **Corners**: Smooth rounded (`rounded-2xl`)
- **Border**: Subtle border for definition
- **Shadow**: Soft shadow that glows on hover
- **Transitions**: Smooth 300ms animations

---

## Layout Structure

### Container
```tsx
<div className="container px-4 py-12 md:py-20">
  <div className="max-w-2xl mx-auto">
    {/* Content centered with max width */}
  </div>
</div>
```

### Two-Column Grid (Desktop)
```tsx
<div className="grid md:grid-cols-2 gap-6 pt-8 max-w-3xl mx-auto">
  {/* Two equal columns on desktop, stack on mobile */}
</div>
```

---

## Spacing System

### Vertical Spacing
- **Section spacing**: `space-y-8` (32px)
- **Large gaps**: `gap-6` (24px)
- **Medium gaps**: `gap-3` (12px)
- **Element spacing**: `space-y-5` (20px)

### Padding
- **Cards**: `p-6 md:p-8` (24px mobile, 32px desktop)
- **Buttons**: `px-8` (32px horizontal)
- **Sections**: `py-12 md:py-20` (48px mobile, 80px desktop)

---

## Forms

### Input Field
```tsx
<Input
  type="email"
  placeholder="Enter your email"
  className="h-12 text-base"
/>
```

### Form Container
```tsx
<form className="space-y-4 max-w-md mx-auto">
  <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border">
    {/* Form fields */}
  </div>
</form>
```

---

## Success States

### Success Message
```tsx
<div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border">
  <div className="flex flex-col items-center gap-3">
    <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center">
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-foreground">You're on the list!</h3>
    <p className="text-muted-foreground text-center">Message text here</p>
  </div>
</div>
```

---

## Animation

### Fade In
```tsx
className="animate-fade-in"
```

### Pulse (Loading States)
```tsx
<div className="animate-pulse">
  {/* Content */}
</div>
```

### Hover Effects
- **Opacity change**: `hover:opacity-90`
- **Shadow glow**: `hover:shadow-glow`
- **All transitions**: `transition-all duration-300`

---

## Mobile Optimization

### Responsive Text
- Headings: `text-4xl md:text-6xl`
- Body: `text-lg md:text-xl`
- Padding: `p-6 md:p-8`
- Spacing: `py-12 md:py-20`

### Grid Behavior
- Mobile: Single column (default)
- Desktop: Two columns (`md:grid-cols-2`)

---

## Do's and Don'ts

### ✅ DO:
- Use clean backgrounds (cream/white)
- Keep icons without background circles
- Use solid, readable text colors
- Maintain generous spacing
- Use the gradient for primary CTAs
- Keep designs minimal and professional

### ❌ DON'T:
- Use dark cosmic backgrounds on content pages
- Put icons in grey circular backgrounds
- Use low-contrast text
- Overcrowd elements
- Use outline buttons for primary CTAs
- Add unnecessary decorative elements

---

## Component Examples

### iOS Page (Main Example)
```tsx
<div className="text-center space-y-8 animate-fade-in">
  {/* Clean Apple icon - no background */}
  <div className="inline-flex items-center justify-center mb-6">
    <svg className="w-20 h-20 text-foreground" viewBox="0 0 24 24" fill="currentColor">
      {/* Apple logo path */}
    </svg>
  </div>

  {/* Clear hierarchy in headings */}
  <h1 className="text-4xl md:text-6xl font-bold text-foreground">
    iOS App Coming Soon
  </h1>

  <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
    We're working hard to bring Nummi to the App Store.
  </p>

  {/* Clean form card */}
  <form className="space-y-4 max-w-md mx-auto">
    <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border">
      <Input type="email" className="h-12 text-base" />
      <Button className="w-full mt-4 bg-gradient-cosmic text-white shadow-glow">
        Notify Me
      </Button>
    </div>
  </form>

  {/* Secondary CTA - solid dark */}
  <Button className="bg-foreground text-background px-8">
    Download on Play Store
  </Button>
</div>
```

---

## Brand Consistency

This design system aligns with Nummi's brand while providing a clean, modern user experience:

- **Cosmic gradient** used sparingly for CTAs
- **Cream/white** backgrounds for readability
- **Dark text** for accessibility
- **Minimal design** to focus on content
- **Professional** feel that builds trust

---

## Future Reference

Use this design system for:
- Additional product pages
- Sign up flows
- Dashboard empty states
- Marketing landing sections
- Email templates (should match this aesthetic)

**Keep it clean, keep it minimal, keep it Nummi.** ✨
