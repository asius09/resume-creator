# Resume Creator V1.0.0

A high-fidelity, ATS-safe resume builder designed for beginners and professionals who need a clean, structured document.

## Features

- **Strict V1.0.0 Specification**: Follows an opinionated, professional layout structure.
- **ATS Optimized**: Single-column layouts without icons or complex elements that confuse machine parsers.
- **Triple Template Support**: Choose between Minimalist, Professional, and International formats.
- **Live Preview**: Real-time visual feedback as you edit your content.
- **ATS Plain Text Preview**: See exactly what the machine sees.
- **Clean PDF Export**: Text-selectable, high-quality PDF generation.
- **Auto-Cleaning**: Built-in logic to normalize bullet points and remove common "fluff".

## Technology Stack

- **Frontend**: Next.js 15+, TypeScript, Tailwind CSS
- **State Management**: React Hooks + LocalStorage Persistence
- **UI Components**: Custom @resume/ui package
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Development

The project is structured as a Monorepo using Turbo:

- `apps/web`: The main Next.js application.
- `packages/ui`: Shared layout components and UI elements.
- `packages/types`: Shared TypeScript definitions.

## Specification

Refer to [SPEC.md](./SPEC.md) for the detailed V1.0.0 instruction contract.
