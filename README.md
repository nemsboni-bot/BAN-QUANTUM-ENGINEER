# BAN Quantum Engineering

A modern, responsive, and professional engineering website built with Next.js, TypeScript, and Tailwind CSS. Serves as a technical knowledge hub, portfolio platform, and reference library for engineering standards.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light mode)

## Features

- Dark/Light mode toggle
- Smooth scroll animations (Framer Motion)
- Searchable engineering standards library (API, ASME, ASTM, ISO)
- Category filtering on all list pages
- Mobile-responsive design with hamburger menu
- SEO-friendly metadata structure
- Contact form with validation
- Professional industrial theme

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services overview, featured projects |
| `/about` | Company background, mission, vision, core expertise |
| `/services/oil-and-gas` | Oil & Gas drilling services |
| `/services/geothermal` | Geothermal drilling services |
| `/services/mechanical-engineering` | Mechanical engineering services |
| `/services/mechanical-design` | Mechanical design services |
| `/services/fabrication` | Fabrication & construction services |
| `/references` | Searchable engineering standards library |
| `/projects` | Project portfolio with category filters |
| `/resources` | Knowledge hub with articles and guides |
| `/contact` | Contact form with company information |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd BAN-QUANTUM-ENGINEER

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

### Other Platforms

```bash
npm run build
# Output is in .next/ directory
# Use `npm start` to run the production server
```

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    about/                # About Us page
    contact/              # Contact page
    projects/             # Projects portfolio
    references/           # Engineering standards library
    resources/            # Knowledge hub
    services/             # Service subpages
      oil-and-gas/
      geothermal/
      mechanical-engineering/
      mechanical-design/
      fabrication/
    globals.css           # Global styles & CSS variables
    layout.tsx            # Root layout with navbar/footer
    page.tsx              # Homepage
  components/
    layout/               # Navbar, Footer
    sections/             # Reusable page sections
    ui/                   # Card, Section components
  data/                   # Static data (references, projects, articles)
  lib/                    # Theme provider, utilities
```

## Customization

- **Colors:** Edit CSS variables in `src/app/globals.css`
- **Content:** Edit data files in `src/data/`
- **Components:** All components are in `src/components/`
- **Pages:** Each page is in its own directory under `src/app/`

## License

All rights reserved. BAN Quantum Engineering.
