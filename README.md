# RoofFindr

A Next.js application built with Tailwind CSS and shadcn/ui components.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rooffindr.git
cd rooffindr
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding shadcn/ui Components

To add more shadcn/ui components, run:

```bash
npx shadcn add [component-name]
```

Example:
```bash
npx shadcn add dropdown-menu toast tabs
```

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

1. Push your code to a Git repository
2. Import your project into Vercel
3. Vercel will detect Next.js and set up the build configuration automatically
4. Your application will be deployed

## Project Structure

```
rooffindr/
├── public/                 # Static assets
├── src/
│   ├── app/                # App router
│   ├── components/         
│   │   └── ui/             # shadcn/ui components
│   └── lib/                # Utility functions
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## License

MIT
