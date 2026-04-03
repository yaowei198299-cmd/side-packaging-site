# Side Packaging HK - Custom Packaging Headless Site

This is a premium, high-performance headless e-commerce site for **Side Packaging HK Limited**, specializing in custom magnetic closure boxes.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router, Tailwind CSS, TypeScript)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Backend**: [Shopify](https://www.shopify.com/) (Headless via Storefront API)
- **Deployment**: [Vercel](https://vercel.com/)

## Features

- **Interactive 3D Preview**: Real-time parametric 3D visualization of custom boxes.
- **B2B Pricing Engine**: Dynamic tiered pricing based on dimensions, material, and quantity.
- **Direct Shopify Sync**: Orders and custom configurations are sent directly to the Shopify backend.
- **SEO Optimized**: High-performance SSR with B2B keyword targeting.

## Setup & Deployment

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd side-packaging-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file with your Shopify credentials:
   ```env
   SHOPIFY_STORE_DOMAIN=saidepackaging.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=e4d8d488295dd34280141b5277c79cde
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Deploy to Vercel**:
   - Push your code to GitHub.
   - Import the project into Vercel.
   - Add the environment variables in the Vercel dashboard.

## Customization

- **3D Viewer**: Modify `components/ThreeBoxViewer.tsx` to adjust lighting, textures, or default box behaviors.
- **Pricing Logic**: Update `components/PriceCalculator.tsx` to reflect your specific manufacturing costs.
- **Shopify API**: All API calls are centralized in `lib/shopify_client.ts`.

---

Developed by **Accio AI Team** (Coder, Vibe Selling Agent, 遥遥领先).
