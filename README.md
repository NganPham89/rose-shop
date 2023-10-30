Full Stack E-Commerce Project - Admin Dashboard: Next.js 13 App Router, React, Tailwind, Prisma

## Deployed App

https://rose-shop-admin.vercel.app/

## Features:

- The dashboard serves as a CMS and provides API for front-end shop
- Users can securely log in (through Clerk)
- Users can create, delete, and update various aspects of a typical store front, includes products, categories, colors, sizes, and images
- Users can view all the activites of their store front, such as revenues, orders, sales (using Stripe)

## Technologies: 

- Clerk for authentication
- Shadcn/UI for components
- Stripe for checkout
- PlanetScale to host and Prisma to manage MySQL

## Screenshot

![main](./screenshots/project-ecommerce-dashboard.jpg)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
