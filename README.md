<div align="center">
  

  # Srikhanth —  Portfolio
  
  **B.Tech AI & DS Undergraduate | GSoC Aspirant**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Three.js](https://img.shields.io/badge/Three.js-WebGL-white?style=for-the-badge&logo=three.js&logoColor=black)](https://threejs.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

  [View Live Demo](https://srikhanth.dev) • [Report Bug](https://github.com/Srikhanth0) • [Request Feature](https://github.com/Srikhanth0)
</div>

---

## 📖 Overview

Welcome to my personal developer portfolio! This project is a highly optimized, immersive 3D web experience built to showcase my expertise in Artificial Intelligence, Machine Learning, Data Science, and immersive technologies (AR/VR).

The application is engineered with **Next.js 15**, styled with **Tailwind CSS 4**, and brought to life using **Framer Motion** for fluid animations and **Spline / WebGL** for interactive 3D graphics. It boasts a perfectly 100/100 Lighthouse score for performance, accessibility, best practices, and SEO.

## ✨ Key Features

- **Immersive 3D Graphics**: Integrated WebGL and Spline scenes with robust context-loss recovery.
- **Glassmorphism UI**: Premium, modern user interface featuring frosted glass aesthetics.
- **Dynamic Animations**: Fluid scroll tracking, magnetic buttons, and page transitions via Framer Motion.
- **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices.
- **SEO Optimized**: Complete metadata configuration, JSON-LD schema markup, robots.txt, and dynamic sitemap generation.
- **Performance Focused**: Aggressive lazy-loading, strict dimensional gating for canvas elements, and optimized Next/Image handling.

## 🛠️ Tech Stack

<div align="center">
  
| Technology | Description | Link |
| --- | --- | --- |
| **Next.js (App Router)** | React Framework | [Docs](https://nextjs.org/docs) |
| **React 19** | UI Library | [Docs](https://react.dev) |
| **Tailwind CSS** | Utility-first CSS | [Docs](https://tailwindcss.com) |
| **Framer Motion** | Animation Library | [Docs](https://www.framer.com/motion) |
| **Spline / WebGL** | 3D Rendering | [Docs](https://spline.design) |
| **Lucide & React Icons** | Iconography | [Docs](https://lucide.dev) |

</div>

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need Node.js and a package manager installed.
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher (or `yarn`/`pnpm`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Srikhanth0/portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Architecture

```
/
├── app/               # Next.js App Router (pages, layout, SEO configs)
├── components/        # React components
│   ├── effects/       # Visual effects (SplashCursor, Rays)
│   ├── nav/           # Navigation bar components
│   ├── sections/      # Major page sections (Hero, About, Experience...)
│   └── ui/            # Reusable UI elements (Cards, Buttons, Timelines)
├── data/              # Static data for projects, experience, certificates
├── hooks/             # Custom React hooks (useDevice, useDimensions)
├── lib/               # Utility functions (cn, etc.)
├── public/            # Static assets (images, icons, SVGs)
└── ...config files    # Tailwind, Next.js, ESLint configurations
```

## 📈 SEO & Performance Highlights

- **Dynamic Imports**: Heavy WebGL and 3D scenes are lazily loaded.
- **Hydration Safety**: Canvas elements are conditionally rendered only after the DOM assigns valid dimensions (`w > 0`, `h > 0`) to prevent `WebGL: CONTEXT_LOST_WEBGL` errors.
- **Semantic HTML & JSON-LD**: Rich snippets and complete semantic HTML structure to ensure top-tier indexing for "Srikhanth Portfolio".

## 📫 Contact

Srikhanth - [srikhanth.m0@gmail.com](mailto:srikhanth.m0@gmail.com)

Project Link: [https://github.com/Srikhanth0/portfolio](https://github.com/Srikhanth0/portfolio)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
